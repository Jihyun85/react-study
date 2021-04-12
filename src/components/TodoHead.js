import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 30%;
  border-bottom: 0.1rem solid #b7cfdc;
  .date {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    font-weight: bolder;
  }
  .day {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.6;
  }
  .count {
    color: #385e72;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <h1 className="date">2021년 4월 12일</h1>
      <span className="day">월요일</span>
      <p className="count">할 일 2개 남음</p>
    </TodoHeadBlock>
  );
};

export default TodoHead;
