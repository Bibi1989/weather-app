import React from "react";

import { CustomBtnProps } from "typescript/react-props.types";
import { Button } from "./styles";

const CustomBtn: React.FC<CustomBtnProps> = ({
  label,
  onClick,
  className,
  testId,
}) => {
  return (
    <Button onClick={onClick} className={className} data-testid={testId}>
      {label}
    </Button>
  );
};

export default CustomBtn;
