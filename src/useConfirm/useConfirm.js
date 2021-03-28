// useConfirm : 사용자가 클릭하면 메세지로 확인하는 작업
// useState, useEffect 이용하지 않음 (사실상 Hook은 아님)
export const useConfirm = (message = " ", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancle !== "function") {
    return;
  }
  const confirmAction = () => {
    // '확인'을 누를 경우
    if (confirm(message)) {
      onConfirm();
    } else {
      // '취소'를 누를 경우
      onCancel();
    }
  };
  return confirmAction;
};
