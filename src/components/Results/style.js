import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2.5rem;
  width: 55%;
  margin-right: 1.3rem;
  @media (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
