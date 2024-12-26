export const ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  SIGN__ERROR: "failed to sign in",
  UNAUTHORIZED_ERROR: "Unauthorized Error",
  NOT_FOUND_ERROR: "Not Found Error",
};

export const authErrorMessages: Record<string, string> = {
  "auth/wrong-password": "Incorrect username or password",
  "auth/user-not-found": "Incorrect username or password",
  "auth/email-already-in-use": "Email already in use",
  "auth/invalid-email": "Invalid email",
  "auth/weak-password": "Weak password",
  "auth/too-many-requests": "Too many requests",
  "auth/invalid-credential": "Invalid username or password",
  "auth/credential-already-in-use": "Email already in use",
  "auth/invalid-verification-code": "Invalid verification code",
  "auth/invalid-verification-id": "Invalid verification ID",
  "auth/invalid-password": "Invalid password",
};
