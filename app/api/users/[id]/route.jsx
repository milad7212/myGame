import { NextResponse } from "next/server";
export function GET(request, { params }) {
  if (params.id > 10) {
    return NextResponse.json({ error: "not Vojod" }, { status: 404 });
  }
  return NextResponse.json({ id: params.id, name: "milad" });
}
