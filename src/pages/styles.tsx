import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;

  @media (max-width: 768px) {
    overflow-x: hidden;
    padding: 0 10px;
  }
`;

export const CityTag = styled.div`
  color: white;
  text-align: center;
`;
