import { Http_Status } from "./constants";

export type TypeHttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type ApiCallOptions = {
  responseType: "json";
  isMultiPart: boolean;
};

export type ResponseType = {
  data: unknown;
  message: string;
  code?: Http_Status;
};

export type TypeApiResponse = {
  success: boolean;
  message: string;
  data?: unknown;
  code: Http_Status;
};

export type TypeResponse = TypeApiResponse | undefined;

export type TypeHandleResponse = {
  handleResponse: (args: TypeResponse) => void;
};
