import React from "react";

const style = {
  border: `2px solid green`,
  padding: "16px",
};

export default function Wrapper({ children }) {
  return (
    /* props.children 사용하기*/
    <div style={style}>{children}</div>
  );
}
