import { NextResponse } from "next/server";

const ApiResponse = {
  /**
   * Success
   */
  /** status: 200, message: "OK" */
  SuccessDeleted: new NextResponse(null, { status: 204 }),

  /**
   * Client Error
   */
  /** status: 400, message: "Bad Request" */
  BadRequest: new NextResponse("Bad Request", { status: 400 }),
  /** status: 401, message: "Unauthorized" */
  Unauthorized: new NextResponse("Unauthorized", { status: 401 }),

  /**
   * Server Error
   */
  /** status: 500, message: "DB error" */
  DBError: new NextResponse("DB error", { status: 500 }),

  json: NextResponse.json,
};

export default ApiResponse;
