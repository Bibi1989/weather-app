import styled from "styled-components";

export const Container = styled.div`
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

export const InputGroup = styled.div`
  padding: 0 10px;
  &.input_group {
    margin-right: 15px;
  }
`;

export const PrevDiv = styled.div`
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

export const NextDiv = styled.div`
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  width: 20px;
  height: 20px;
  transform: translateY(-50%) rotate(45deg);
  position: absolute;
  right: -30px;
  top: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 10px;
    top: -50%;
    z-index: 4;
    width: 16px;
    height: 16px;
  }
`;

export const Button = styled.div`
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
