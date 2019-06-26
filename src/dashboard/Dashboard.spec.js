// Test away
import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

it("renders without error", () => {
    render(<Dashboard />);
});

it("starts with gate unlocked and open", () => {
    const { getByTestId } = render(<Dashboard />);
    const lockStatus = getByTestId("lock-status");
    const openStatus = getByTestId("open-status");

    expect(getNodeText(lockStatus).toLowerCase()).toBe("unlocked");
    expect(getNodeText(openStatus).toLowerCase()).toBe("open");
});