import React from "react";

import { RadioGroupProps } from "typescript/react-props.types";
import { Container, InputGroup } from "./styles";

const RadioGroup: React.FC<RadioGroupProps> = ({ onChange, units }) => {
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
        <label htmlFor="f">Fahrenheit</label>
      </InputGroup>
    </Container>
  );
};

export default RadioGroup;
