import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = [
      {
        date: 1111111,
        description: "Stub description 1",
        icon: "stubIcon1",
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: "Stub description2",
        icon: "stubIcon2",
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ];

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