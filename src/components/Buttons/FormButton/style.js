import styled from "styled-components";

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color: hsl(0, 0%, 90%);
  width: 50%;
  height: 3rem;
  cursor: pointer;
  border-top-left-radius: ${(props) =>
    props.borderChoice === "left" ? 7 : 0}px;
  border-bottom-left-radius: ${(props) =>
    props.borderChoice === "left" ? 7 : 0}px;
  border-top-right-radius: ${(props) =>
    props.borderChoice === "right" ? 7 : 1}px;
  border-bottom-right-radius: ${(props) =>
    props.borderChoice === "right" ? 7 : 1}px;
  background: ${(props) =>
    props.selected === true ? "#d88147 !important" : "none"};
  background: ${(props) => (props.selected === true ? "#d88147" : "none")};
  color: ${(props) => (props.selected === true ? "white" : "none")};

  &:hover {
    background: #d88147;
    color: white;
  }
`;
