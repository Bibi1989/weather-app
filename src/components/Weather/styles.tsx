import styled from "styled-components";

export const WeatherGrid = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "1fr" : "1fr 1fr 1fr"};
  gap: 5px;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const WeatherCard = styled.div`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: violet;
  color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const TempName = styled.div`
  text-align: center;
  font-size: 18px;
`;

export const WeatherForcast = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-size: 13px;
  }
`;

export const TempDate = styled.div``;
