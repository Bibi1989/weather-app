import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  disabled: boolean;
};

const NextBtn: React.FC<Props> = ({ onClick, disabled }) => (
  <>{!disabled ? <NextDiv onClick={onClick} /> : null}</>
);

const NextDiv = styled.div`
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  width: 20px;
  height: 20px;
  transform: translateY(-50%) rotate(45deg);
  position: absolute;
  right: -30px;
  top: 50%;
  cursor: pointer;
`;

export default NextBtn;
