import React from "react";
import styled from "styled-components";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  units: string;
};

const RadioGroup: React.FC<Props> = ({ onChange, units }) => {
  const isCelciusChecked = units === "metric";
  const isFahreheintChecked = units === "imperial";

  return (
    <Container>
      <input
        type="radio"
        name="degree"
        id="c"
        onChange={onChange}
        value="metric"
        checked={isCelciusChecked}
      />
      <label htmlFor="c">Celcius</label>
      <input
        type="radio"
        name="degree"
        id="f"
        onChange={onChange}
        value="imperial"
        checked={isFahreheintChecked}
      />
      <label htmlFor="f">Fahareient</label>
    </Container>
  );
};

const Container = styled.div`
  label {
    color: white;
    margin-left: 5px;
  }
`;

export default RadioGroup;
