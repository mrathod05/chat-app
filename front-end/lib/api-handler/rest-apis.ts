/* eslint-disable @typescript-eslint/no-explicit-any */

import { ApiCallOptions, TypeApiResponse, TypeHttpMethod } from "./types";
import fetchData from "./fetch-data";
import { ENV_CONSTANTS } from "../constants/env";

const API_URL = ENV_CONSTANTS.API_URL; // Add your api end-point;

const DEFAULT_API_OPTIONS: ApiCallOptions = {
  isMultiPart: false,
  responseType: "json",
};

const general = async ({
  url,
  method,
  data,
  options = DEFAULT_API_OPTIONS,
}: {
  url: string;
  method: TypeHttpMethod;
  data?: unknown;
  options?: ApiCallOptions;
}): Promise<TypeApiResponse> => {
  "use server";
  const response = await fetchData({
    url: `${API_URL}/${url}`,
    method,
    data,
    options,
  });
  return response;
};

export const GET = (
  apiName: string,
  params?: URLSearchParams
): Promise<TypeApiResponse> => {
  const url = params ? `${apiName}?${params.toString()}` : `${apiName}`;
  return general({ method: "GET", url });
};

export const GET_BY_ID = (
  apiName: string,
  id: string | null,
  params?: URLSearchParams
): Promise<TypeApiResponse> => {
  const main = `${apiName}/${id}`;
  const url = params ? `${main}?${params.toString()}` : main;

  return general({ url, method: "GET" });
};

export const POST = (
  apiName: string,
  data: unknown,
  isMultiPart?: boolean
): Promise<TypeApiResponse> => {
  return general({
    url: apiName,
    method: "POST",
    data,
    options: { ...DEFAULT_API_OPTIONS, isMultiPart: isMultiPart || false },
  });
};

export const PATCH_BY_ID = (
  apiName: string,
  id: string,
  data: unknown,
  isMultiPart?: boolean
): Promise<TypeApiResponse> => {
  return general({
    url: `${apiName}/${id}`,
    method: "PATCH",
    data,
    options: { ...DEFAULT_API_OPTIONS, isMultiPart: isMultiPart || false },
  });
};

export const PUT_BY_ID = (
  apiName: string,
  id: string,
  data: unknown,
  isMultiPart?: boolean
): Promise<TypeApiResponse> => {
  return general({
    url: `${apiName}/${id}`,
    method: "PUT",
    data,
    options: { ...DEFAULT_API_OPTIONS, isMultiPart: isMultiPart || false },
  });
};

export const DELETE_BY_ID = (
  apiName: string,
  id: string
): Promise<TypeApiResponse> => {
  return general({
    url: `${apiName}/${id}`,
    method: "DELETE",
  });
};
