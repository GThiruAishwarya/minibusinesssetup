import React from "react";
import BusinessForm from "./components/BusinessForm";
import DisplayCard from "./components/DisplayCard";
import useBusinessData from "./hooks/useBusinessData";

export default function App() {
  const {
    businessData,
    loading,
    error,
    fetchBusinessData,
    regenerateHeadline,
  } = useBusinessData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center p-6 font-sans">
      <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-md mb-8 text-center">
        <h1 className="text-3xl font-bold">Mini Local Business Dashboard</h1>
        <p className="text-sm mt-1">See your business like never before</p>
      </div>
      <BusinessForm onSubmit={fetchBusinessData} loading={loading} />
      <DisplayCard
        data={businessData}
        loading={loading}
        error={error}
        onRegenerate={regenerateHeadline}
      />
    </div>
  );
}
