// import React from "react";

// export default function Hello(props) {
//   return (
//     <>
//       <p style={{ backgroundColor: props.color }}>Hello, {props.name}</p>
//     </>
//   );
// }

import React from "react";

export default function Hello({ name, color, backgroundColor, isSpecial }) {
  return (
    <>
      <p style={{ color, backgroundColor }}>
        {/* 조건부 렌더링*/}
        {isSpecial && "👑👑"}Hello, {name}
      </p>
    </>
  );
}

/* defaultProps */
Hello.defaultProps = {
  name: "Stranger",
  color: "green",
  backgroundColor: "black",
};
