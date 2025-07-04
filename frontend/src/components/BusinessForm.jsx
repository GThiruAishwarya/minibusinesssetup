import React, { useState } from "react";

export default function BusinessForm({ onSubmit, loading }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (name && location) {
      onSubmit({ name, location });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md w-full max-w-md mb-6"
    >
      <div className="mb-4">
        <label className="block mb-1 font-medium">Business Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        {touched && !name && (
          <span className="text-red-500 text-sm">Required</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Location</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={loading}
        />
        {touched && !location && (
          <span className="text-red-500 text-sm">Required</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
