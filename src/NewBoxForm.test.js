import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import BoxList from './BoxList'

it("renders component without crashing", () => {
    render(<NewBoxForm />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add a new box', () => {
    const { queryByText, getByLabelText, getByText } = render(<NewBoxForm />);
    const width = getByLabelText('Width:');
    const height = getByLabelText('Height:');
    const colour = getByLabelText('Background-color:');
    const btn = queryByText('Enter');

    // make sure box we're adding is not in document
    expect(queryByText('#8B0000')).not.toBeInTheDocument();
    
    fireEvent.change(width, {target: {value: '200'}})
    fireEvent.change(height, {target: {value: '250'}})
    fireEvent.change(colour, {target: {value: '#8B0000'}})
    fireEvent.click(btn);

    // expect(queryByText('#8B0000')).toBeInTheDocument();
})

// TO-DO: figure out error