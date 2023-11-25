import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json(body);
}
