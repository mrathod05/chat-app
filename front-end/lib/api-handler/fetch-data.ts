"use server";

import axios from "axios";

import { Logger } from "../logger";
import { Http_Status } from "./constants";
import {
  ApiCallOptions,
  ResponseType,
  TypeApiResponse,
  TypeHttpMethod,
} from "./types";

type ApiCallParams = {
  url: string;
  method: TypeHttpMethod;
  data?: unknown;
  options: ApiCallOptions;
  timeout?: number;
  retries?: number;
};

const DEFAULT_TIMEOUT = 30000; // 30 seconds
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms: number): Promise<unknown> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const createHeaders = (isMultiPart = false): Record<string, string> => {
  const token = "confidential"; // Configure your token here

  return {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": isMultiPart ? "multipart/form-data" : "application/json",
    Accept: "application/json",
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleApiError = (error: any): TypeApiResponse => {
  Logger.log({ error });
  const errorDetails = error.response?.data;
  Logger.error({
    message: "Api error",
    error: errorDetails?.errors || errorDetails,
  });

  const baseError = {
    success: false,
    message: "SOMETHING_WENT_WRONG",
    code: Http_Status.BAD_REQUEST,
  };

  if (!error.response) {
    return {
      ...baseError,
      message: error.message || "SOMETHING_WENT_WRONG",
      code: Http_Status.SERVICE_UNAVAILABLE,
    };
  }

  const { data, status } = error.response;

  if (status === Http_Status.UNAUTHORIZED) {
    return {
      ...baseError,
      message: "UNAUTHORIZED",
      code: Http_Status.UNAUTHORIZED,
    };
  }

  return {
    ...baseError,
    message: data?.responseMessage || "SOMETHING_WENT_WRONG",
    code: data?.httpStatusCode || status,
  };
};

const fetchData = async ({
  url,
  method,
  data,
  options,
  timeout = DEFAULT_TIMEOUT,
  retries = MAX_RETRIES,
}: ApiCallParams): Promise<TypeApiResponse> => {
  const abortController = new AbortController();
  const { isMultiPart = false, responseType } = options;

  // Set timeout
  const timeoutId = setTimeout(() => {
    abortController.abort("Request timeout");
  }, timeout);

  try {
    const headers = createHeaders(isMultiPart);
    let attempt = 0;

    while (attempt < retries) {
      try {
        const result = await axios(url, {
          method,
          headers,
          data,
          responseType,
          signal: abortController.signal,
          timeout,
        });

        const response: ResponseType = result.data;

        return {
          success: true,
          data: response,
          message: response.message,
          code: Http_Status.SUCCESS,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (
          attempt < retries - 1 &&
          (!error.response || error.response.status >= 500)
        ) {
          attempt++;
          await sleep(RETRY_DELAY * attempt);
          continue;
        }
        throw error;
      }
    }

    throw new Error("Max retries reached");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return handleApiError(error);
  } finally {
    clearTimeout(timeoutId);
  }
};

export default fetchData;
