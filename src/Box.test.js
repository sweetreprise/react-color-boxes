import React from 'react';
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import Box from './Box';

it("renders component without crashing", () => {
    render(<Box />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

it("successfully removes a box when the X is clicked", () => {
    const { queryByTestId } = render(<Box />);
    const box = queryByTestId('box');
    const btn = queryByTestId('delete-button')

    // expect box to be present in the document
    expect(box).toBeInTheDocument()
    // fire click event
    fireEvent.click(btn);

    // expect box to no longer be in the document
    expect(box).not.toBeInTheDocument()
})


