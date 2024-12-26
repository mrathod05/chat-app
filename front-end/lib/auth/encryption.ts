import CryptoJS from "crypto-js";

import { Logger } from "../logger";
import { ENV_CONSTANTS } from "../constants/env";

const { ENCRYPTION_KEY = "test" } = ENV_CONSTANTS;
// NEXT_PUBLIC_ENCRYPTION_KEY=8ca8afc2f350b91fc1af4ec583f7da4eddca9f48b09386b1c40edfe891639a52 #openssl rand -hex 32

export const encryptData = (data: unknown): string => {
  try {
    const dataString =
      typeof data === "object" ? JSON.stringify(data) : String(data);

    const encrypted = CryptoJS.AES.encrypt(dataString, ENCRYPTION_KEY);

    return encrypted.toString();
  } catch (error) {
    Logger.log(error);
    throw new Error("Encryption failed");
  }
};

export const decryptData = (encryptedData: string): unknown => {
  try {
    Logger.log({ encryptedData, ENCRYPTION_KEY });
    const decrypted = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
    console.log({ decrypted });
    const dataString = decrypted.toString(CryptoJS.enc.Utf8);
    console.log({ dataString });

    return JSON.parse(dataString);
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    Logger.error({ error, message: error?.message, state: error?.state });
    throw new Error("Decryption failed");
  }
};
