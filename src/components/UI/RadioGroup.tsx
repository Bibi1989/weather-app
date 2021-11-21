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
      <InputGroup className="input_group">
        <input
          type="radio"
          name="degree"
          id="c"
          onChange={onChange}
          value="metric"
          checked={isCelciusChecked}
        />
        <label htmlFor="c">Celcius</label>
      </InputGroup>
      <InputGroup>
        <input
          type="radio"
          name="degree"
          id="f"
          onChange={onChange}
          value="imperial"
          checked={isFahreheintChecked}
        />
        <label htmlFor="f">Fahareient</label>
      </InputGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  label {
    color: white;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const InputGroup = styled.div`
  padding: 0 10px;
  &.input_group {
    margin-right: 15px;
  }
`;

export default RadioGroup;
