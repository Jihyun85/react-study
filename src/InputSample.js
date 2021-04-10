import React, { useRef, useState } from "react";

export default function InputSample() {
  const [input, setInput] = useState({
    myName: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { myName, nickname } = input;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value, // 조건문으로 쓰는게 아니라 비구조화 할당을 통해 key값이 e.target.name인 요소의 value를 e.target.value로 함!!😱😱😱
    });
  };
  const handleReset = () => {
    setInput({ myName: "", nickname: "" });
    nameInput.current.focus();
  };
  return (
    <>
      <input
        name="myName"
        type="text"
        value={input.myName}
        placeholder="이름"
        onChange={handleInput}
        ref={nameInput}
      />
      <input
        name="nickname"
        type="text"
        value={input.nickname}
        placeholder="닉네임"
        onChange={handleInput}
      />
      <button type="button" onClick={handleReset}>
        reset
      </button>
      <p>
        <b>값: {`${myName} ${nickname}`}</b>
      </p>
    </>
  );
}
