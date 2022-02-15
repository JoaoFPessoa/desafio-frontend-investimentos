import styled, { css } from "styled-components";

export default styled.input`
  margin-top: 2rem;
  display: block;
  background: none;
  border: 0;
  outline: 0;
  border-bottom: 1px solid black;
  font-size: 1.2rem;
  width: 13.75rem;

  ${({ error }) =>
    error &&
    css`
      border-bottom: 1px solid #dc143c;
    `}
`;
