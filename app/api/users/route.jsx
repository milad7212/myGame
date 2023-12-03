import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import schema from "./schema";

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }
  return NextResponse.json({ name: "hassan" });
}
