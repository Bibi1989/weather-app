import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import WeatherActions from "..";

type Props = {
  refreshData: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  units: string;
};

const renderWeatherActions = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
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
