import { useEffect } from "react";

// useBeforeLeave : 기본적으로 탭을 닫을 때 실행되는 function
export const useBeforeLeave = (onBefore) => {
  if (!onBefore || typeof onBefore !== "function") {
    return;
  }
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      // 이런 식으로 event 범위를 구체적으로 지정할 수 있음
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};
