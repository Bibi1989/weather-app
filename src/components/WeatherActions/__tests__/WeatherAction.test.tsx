import React from "react";
import { render, fireEvent } from "@testing-library/react";

import WeatherActions from "..";
import { WeatherActionProps } from "typescript/react-props.types";

const renderWeatherActions = (props: Partial<WeatherActionProps> = {}) => {
  const defaultProps: WeatherActionProps = {
    refreshData() {
      return;
    },
    onChange() {
      return;
    },
    units: "metric",
  };

  return render(<WeatherActions {...defaultProps} {...props} />);
};

describe("WeatherAction", () => {
  it("Refresh button snapshot", () => {
    const { container } = renderWeatherActions();

    expect(container).toMatchSnapshot();
  });
  it("Refresh button should be in the document", () => {
    const { queryByTestId } = renderWeatherActions();

    const refreshBtn = queryByTestId("refreshBtn");

    expect(refreshBtn).toBeInTheDocument();
  });
  it("refreshData should be called", () => {
    const refreshData = jest.fn();
    const { getByTestId } = renderWeatherActions({ refreshData });

    const refreshBtn = getByTestId("refreshBtn");

    fireEvent.click(refreshBtn);

    expect(refreshData).toHaveBeenCalledTimes(1);
  });
});
