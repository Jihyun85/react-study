import { useState, useEffect } from "react";

// useNetwork : network 상태가 online인지 offline인지 확인하는 Hook
export const useNetwork = (callback) => {
  if (!callback || typeof callback !== "function") {
    return;
  }
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
