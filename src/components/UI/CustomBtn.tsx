import React from "react";
import styled from "styled-components";

import { CustomBtnProps } from "typescript/react-props.types";

const CustomBtn: React.FC<CustomBtnProps> = ({ label, onClick, className }) => {
  return (
    <Button onClick={onClick} className={className} data-testid="refreshBtn">
      {label}
    </Button>
  );
};

const Button = styled.div`
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default CustomBtn;
