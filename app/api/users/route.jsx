import { NextResponse } from "next/server";
export function GET(request) {
  return NextResponse.json([
    { name: "ali", age: 25 },
    { name: "ali", age: 25 },
    { name: "ali", age: 25 },
  ]);
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json(body);
}
