import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = {
        date: 1111111,
        description: "Stub description",
        icon: "stubIcon1",
        temperature: {
          max: 22,
          min: 12,
        },
        onSelect: () => {},
      };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

    it("renders correctly", () => {
        const { asFragment } = render(
        <ForecastSummaries forecasts={validProps} />);
        expect(asFragment()).toMatchSnapshot();
      });

      it("renders the correct number of ForecastSummary instances", () => {
        const { getAllByTestId } = render(
          <ForecastSummaries forecasts={validProps} />
        );
    
        expect(getAllByTestId("forecast-summary")).toHaveLength(2);
      });

  });