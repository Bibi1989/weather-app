import React from "react";

import CustomBtn from "components/UI/CustomBtn";
import RadioGroup from "components/UI/RadioGroup";
import { WeatherActionProps } from "typescript/react-props.types";
import { Container, Wrapper, Label } from "./styles";
import { CityTag } from "pages/styles";

const WeatherActions: React.FC<WeatherActionProps> = ({
  refreshData,
  onChange,
  units,
  city,
  currentLocation,
}) => {
  return (
    <Wrapper>
      <Container>
        <div></div>
        <RadioGroup onChange={onChange} units={units} />
        <CustomBtn label="Refresh" onClick={refreshData} testId="refreshBtn" />
      </Container>
      <Container>
        <div>
          <CustomBtn
            label="Select Current Location"
            onClick={currentLocation}
            testId="currentLocationBtn"
          />
          <Label>Note: Enable location in your browser</Label>
        </div>
        <CityTag>Location: {city?.name}</CityTag>
      </Container>
    </Wrapper>
  );
};

export default WeatherActions;
