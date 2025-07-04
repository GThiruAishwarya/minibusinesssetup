import { useState } from "react";

//const API_BASE = "http://localhost:5000"; // Change if backend is locally
const API_BASE = "https://minibusinesssetup-backend.onrender.com"; // backend deploy link in render

export default function useBusinessData() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBusinessData = async ({ name, location }) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/business-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location }),
      });
      if (!res.ok) throw new Error("Failed to fetch business data");
      const data = await res.json();
      setBusinessData({ ...data, name, location });
    } catch (err) {
      setError(err.message || "Unknown error");
      setBusinessData(null);
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    if (!businessData?.name || !businessData?.location) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${API_BASE}/regenerate-headline?name=${encodeURIComponent(
          businessData.name
        )}&location=${encodeURIComponent(businessData.location)}`
      );
      if (!res.ok) throw new Error("Failed to regenerate headline");
      const { headline } = await res.json();
      setBusinessData((prev) => ({ ...prev, headline }));
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return {
    businessData,
    loading,
    error,
    fetchBusinessData,
    regenerateHeadline,
  };
}
