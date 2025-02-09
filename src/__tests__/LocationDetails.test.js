import React from 'react';
import { render } from "@testing-library/react";
import LocationDetails from '../../components/LocationDetails';

describe("LocationDetails", () => {
    it("renders the corect city and location props", () => {
        const { getByText } = render(
            <LocationDetails city="Manchester" country="UK" />
        );

        expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
    });
});