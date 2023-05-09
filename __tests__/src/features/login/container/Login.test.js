import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import Login from '../../../../../src/features/login/container/Login';

describe('Login', () => {

    const inset = {
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };

    it('should render all inputs in the file', async () => {
        const { getByTestId } = render(
            <NativeBaseProvider initialWindowMetrics={inset}>
                <Login />
            </NativeBaseProvider>
        );

        await waitFor(() => {
            const emailInput = getByTestId('email');
            const passwordInput = getByTestId('password');
            expect(emailInput).toBeDefined();
            expect(passwordInput).toBeDefined();
        });
    });
});