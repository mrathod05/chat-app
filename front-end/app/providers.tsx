"use client";

import { JSX, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const NextSessionProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextSessionProvider;
