import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log({ method: request.method });
  const data = { count: 100, method: "GET" };

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  console.log({ method: request.method });
  const data = { count: 200, method: "POST" };

  return NextResponse.json(data);
}
