import React from "react";

export function Button({ className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition ${className}`}
      {...props}
    />
  );
}