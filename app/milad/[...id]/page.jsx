import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

async function page({ params, searchParams }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-blue-600 min-h-screen flex text-white justify-center items-center">
      <p className="">hello {session && <span>{session.user?.email}</span>}</p>
      <p className="text-3xl font-bold">
        {params.id} <span className="mx-4">{searchParams.sortOrder}</span>
      </p>
    </div>
  );
}

export default page;
