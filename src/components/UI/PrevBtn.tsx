import React from "react";

import { PrevBtnProps } from "typescript/react-props.types";
import { PrevDiv } from "./styles";

const PrevBtn: React.FC<PrevBtnProps> = ({ onClick, disabled, isMobile }) => (
  <>{!disabled ? <PrevDiv onClick={onClick} /> : null}</>
);

export default PrevBtn;
