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
      <div></div>
      <RadioGroup onChange={onChange} units={units} />
      <CustomBtn label="Refresh" onClick={refreshData} className="btn" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  width: 100%;

  
  @media (max-width: 768px) {
    flex-direction: column;

    &.btn {
      margin-top: 10px;
    }
  }
`;

export default WeatherActions;
