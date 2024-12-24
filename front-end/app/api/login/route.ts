import { NextResponse, NextRequest } from "next/server";

import { Logger } from "@/lib/logger";
import { ERROR_MESSAGES } from "@/lib/constants/errorMessages";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    if (!body?.email || !body?.isSocial || !body?.accessToken) {
      throw new Error("Invalid request body");
    }

    const isSocial = body.isSocial === "true";

    const response = { id: 123456, ...body, isSocial };

    return NextResponse.json(response, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    Logger.log({ error });
    return NextResponse.json(
      {
        message: error?.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      },
      { status: error.code || 500 }
    );
  }
}
