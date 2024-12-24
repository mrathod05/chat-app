import { GET } from "./rest-apis";
import { TypeApiResponse } from "./types";

export const getProductList = (): Promise<TypeApiResponse> => {
  return GET("products");
};
