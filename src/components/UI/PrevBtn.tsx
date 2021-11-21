import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  disabled: boolean;
  isMobile: boolean;
};

const PrevBtn: React.FC<Props> = ({ onClick, disabled, isMobile }) => (
  <>{!disabled ? <PrevDiv onClick={onClick} /> : null}</>
);

const PrevDiv = styled.div`
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  width: 20px;
  height: 20px;
  transform: translateY(-50%) rotate(-45deg);
  position: absolute;
  left: -30px;
  top: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    left: 10px;
    top: -50%;
    z-index: 4;
    width: 16px;
    height: 16px;
  }
`;

export default PrevBtn;
