import React from "react";
import styled from "styled-components";

import WeatherPage from "pages/WeatherPage";

function App() {
  return (
    <Container>
      <WeatherPage />
    </Container>
  );
}

const Container = styled.div`
  background-color: #1d3354;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
