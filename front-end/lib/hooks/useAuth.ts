import { signIn as _signIn } from "next-auth/react";
import { ROUTE } from "../constants/route";

const DEFAULT_OPTION = {
  redirect: false,
  callbackUrl: ROUTE.dashboard,
};

const useAuth = () => {
  const handleCredentialSinIn = () => {
    _signIn("credentials", { ...DEFAULT_OPTION });
  };

  return {};
};

export default useAuth;
