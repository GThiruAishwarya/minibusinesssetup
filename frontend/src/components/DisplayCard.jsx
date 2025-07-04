import React from "react";
import Spinner from "./Spinner";

export default function DisplayCard({ data, loading, error, onRegenerate }) {
  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data) return null;

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
      <div className="text-lg font-semibold mb-2">
        Google Rating: <span className="text-yellow-500">{data.rating}★</span>
      </div>
      <div className="mb-2">Number of Reviews: <b>{data.reviews}</b></div>
      <div className="mb-4 italic text-gray-700">"{data.headline}"</div>
      <button
        onClick={onRegenerate}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}
