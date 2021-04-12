import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 40rem;
  height: 60rem;
  background-color: white;
  margin: 0 auto;
  margin-top: calc((100vh - 60rem) / 2);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
