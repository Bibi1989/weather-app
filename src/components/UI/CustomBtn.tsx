import React from "react";

import { CustomBtnProps } from "typescript/react-props.types";
import { Button } from "./styles";

const CustomBtn: React.FC<CustomBtnProps> = ({ label, onClick, className }) => {
  return (
    <Button onClick={onClick} className={className} data-testid="refreshBtn">
      {label}
    </Button>
  );
};

export default CustomBtn;
