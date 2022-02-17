import styled from "styled-components";

export const SubmitButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 45%;
  cursor: pointer;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 7px;
  background-color: ${(props) =>
    props.disabled === true ? "grey" : "#D88147"};
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const CleanDataButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 45%;
  cursor: pointer;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 7px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
  &:hover {
    background: #d88147;
    color: white;
  }
`;
