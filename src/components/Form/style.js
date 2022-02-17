import styled from "styled-components";

export const Container = styled.div`
  margin-left: 1.3rem;
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const FormContainer = styled.form`
  width: 45%;
  h3 {
    font-weight: 400;
    font-size: 1rem;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Option = styled.div`
  display: block;
  width: 220px;
  div {
    display: flex;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const SubmitContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ResultsContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`