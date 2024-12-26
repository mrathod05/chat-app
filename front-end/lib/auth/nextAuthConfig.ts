/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { ROUTE } from "../constants/route";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { Logger } from "../logger";
import { ENV_CONSTANTS } from "../constants/env";

const { NEXT_AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } =
  ENV_CONSTANTS;

export const authOptions: NextAuthOptions = {
  secret: NEXT_AUTH_SECRET,
  pages: {
    signIn: ROUTE.login,
    error: ROUTE.login,
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, isSocial, accessToken } = credentials;

        try {
          const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, isSocial, accessToken }),
          });

          const result = await response.json();
          if (!response?.ok) {
            throw new Error(
              result?.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR
            );
          }

          return result;
        } catch (error: any) {
          Logger.log({ error });
          throw new Error(
            error.result?.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR
          );
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }: any) {
      if (user) {
        token.user = user;
      }

      return token;
    },
    session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
  },
};
