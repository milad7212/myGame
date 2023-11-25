import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request, { params }) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id ) },
  });
  if (!user) {
    return NextResponse.json({ error: "not Vojod" }, { status: 404 });
  }
  return NextResponse.json(user);
}
