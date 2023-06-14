import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import forecast from '../data/forecast.json';

describe("App", () => {
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

  test("renders App component correctly", () => {
     render(<App location={forecast.location} />);
     const h1Element = screen.getByText(/Manchester, UK/i);
     expect(h1Element).toBeInTheDocument();
  });
});
