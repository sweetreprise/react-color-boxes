import React from 'react';
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import BoxList from './BoxList';

it("renders component without crashing", () => {
    render(<BoxList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});