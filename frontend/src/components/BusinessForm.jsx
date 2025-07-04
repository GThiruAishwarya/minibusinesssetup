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
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mb-6 relative"
    >
      <div className="mb-5 relative">
        <input
          type="text"
          className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"
          placeholder="Business Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">
          Business Name
        </label>
        {touched && !name && <p className="text-red-500 text-sm mt-1">Required</p>}
      </div>
      <div className="mb-5 relative">
        <input
          type="text"
          className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={loading}
        />
        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">
          Location
        </label>
        {touched && !location && <p className="text-red-500 text-sm mt-1">Required</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
