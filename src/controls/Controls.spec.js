import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

import Controls from './Controls';

it("renders without error", () => {
    render(<Controls/>);
});

it("calls function when button clicked", () => {
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();

    const props = {
        closed: true,
        locked: false,
        toggleLocked: toggleLocked,
        toggleClosed: toggleClosed
    }
    const { getByText } = render(<Controls {...props}/>);
    const tlButton = getByText(/lock gate/i);

    fireEvent.click(tlButton);

    expect(toggleLocked).toHaveBeenCalled();

    const tcButton = getByText(/open gate/i);

    fireEvent.click(tcButton);

    expect(toggleClosed).toHaveBeenCalled();
})