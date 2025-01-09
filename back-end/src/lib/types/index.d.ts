type TypeApiResponse = {
  code: number;
  status?: boolean;
  message: string;
  timestamp: string;
  path?: string;
  data?: unknown;
  details?: unknown;
};

type LoginDeviceDto = {
  device_id: string;
  device_type: string;
  access_token?: string;
};
