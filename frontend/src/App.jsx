import React, { useState } from "react";
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Mini Local Business Dashboard</h1>
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
