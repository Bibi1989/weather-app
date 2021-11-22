import React from "react";

import CustomBtn from "components/UI/CustomBtn";
import RadioGroup from "components/UI/RadioGroup";
import { WeatherActionProps } from "typescript/react-props.types";
import { Container } from "./styles";

const WeatherActions: React.FC<WeatherActionProps> = ({
  refreshData,
  onChange,
  units,
}) => {
  return (
    <Container>
      <div></div>
      <RadioGroup onChange={onChange} units={units} />
      <CustomBtn label="Refresh" onClick={refreshData} className="btn" />
    </Container>
  );
};

export default WeatherActions;
