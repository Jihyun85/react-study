import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  if ((typeof duration !== "number", typeof delay !== "number")) {
    return;
  }
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      element.style.opacity = 1;
    }
  }, []);
  return { ref, style: { opacity: 0 } };
};
