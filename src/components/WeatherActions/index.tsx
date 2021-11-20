import React from "react";
import styled from "styled-components";

import CustomBtn from "components/UI/CustomBtn";
import RadioGroup from "components/UI/RadioGroup";

type Props = {
  refreshData: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  units: string;
};

const WeatherActions: React.FC<Props> = ({ refreshData, onChange, units }) => {
  return (
    <Container>
      <RadioGroup onChange={onChange} units={units} />
      <CustomBtn label="Refresh" onClick={refreshData} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
`;

export default WeatherActions;
