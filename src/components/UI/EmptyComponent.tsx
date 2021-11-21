import React from "react";
import styled from "styled-components";

const EmptyComponent = () => {
  return (
    <Container data-testid="empty">
      <p>Sorry there is/are no weathers forcast</p>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  width: 100%;

  p {
    text-align: center;
    color: white;
  }
`;

export default EmptyComponent;
