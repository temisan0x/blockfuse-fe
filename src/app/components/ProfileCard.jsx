"use client";

import React from "react";

export default function ProfileCard({ imageUrl, name, role }) {
  return (
    <div className=" bg-gray-900 shadow-md flex flex-col items-center mx-auto">
      {imageUrl && (
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={`${name} profile`}
            className="w-56 h-56 object-cover"
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 border-b-2 border-purple-500 pb-1 w-full text-center">
          {name}
        </h3>

        {role && (
          <p className="text-base text-gray-400 mb-4 text-center">{role}</p>
        )}
      </div>
    </div>
  );
}
