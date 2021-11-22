import React from "react";

import { NextBtnProps } from "typescript/react-props.types";
import { NextDiv } from "./styles";

const NextBtn: React.FC<NextBtnProps> = ({ onClick, disabled, isMobile }) => (
  <>{!disabled ? <NextDiv onClick={onClick} /> : null}</>
);

export default NextBtn;
