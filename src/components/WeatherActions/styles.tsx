import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;

    &.btn {
      margin-top: 10px;
    }
  }
`;

export const Wrapper = styled.div``;
