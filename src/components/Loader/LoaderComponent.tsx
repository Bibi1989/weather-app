import React from "react";

import { Container, Loader } from "./styles";

const LoaderComponent = () => {
  return (
    <Container>
      <Loader />
      <p>Loading, Please wait...</p>
    </Container>
  );
};

export default LoaderComponent;
