import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  onClick: () => void;
};

const CustomBtn: React.FC<Props> = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

const Button = styled.div`
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
  cursor: pointer;
`;

export default CustomBtn;
