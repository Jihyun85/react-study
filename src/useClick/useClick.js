import { useRef, useEffect } from "react";

export const useClick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", callback);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", callback);
      }
    };
  }, [callback]);
  return ref;
};
