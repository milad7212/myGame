import React from "react";

function page({ params, searchParams }) {
  console.log("milad", params);
  console.log("milad", searchParams);
  return (
    <div className="bg-blue-600 min-h-screen flex text-white justify-center items-center">
      <p className="text-3xl font-bold">
        {params.id} <span className="mx-4">{searchParams.sortOrder}</span>
      </p>
    </div>
  );
}

export default page;
