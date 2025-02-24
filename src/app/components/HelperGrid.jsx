"use client";

import React from "react";

export default function HelperGrid({ items, columns = "md: grid-cols-3" }) {
    return (
        <div className={`grid grid-cols-1 ${columns} gap-8 mb-12`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-md border border-purple-500 flex flex-col items-center text-start"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center w-full">
              <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
              {item.title}
            </h3>
            <p className="text-base text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    )
}