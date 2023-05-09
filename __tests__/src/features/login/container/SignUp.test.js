import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import SignUp from '../../../../../src/features/login/container/SignUp';

describe('SignUp', () => {
    const inset = {
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      };

    it('should render the email and password input fields', async () => {
        const { getByTestId } = render(
            <NativeBaseProvider initialWindowMetrics={inset}>
                <SignUp />
            </NativeBaseProvider>
        );
        await waitFor(() => {
            const emailInput = getByTestId('email');
            const passwordInput = getByTestId('password');
            const confirmPassInput = getByTestId('confirmPassword');
            expect(emailInput).toBeDefined();
            expect(passwordInput).toBeDefined();
            expect(confirmPassInput).toBeDefined();
        });
    });

    it('should update email input value when typing', async () => {
        const { getByTestId } = render(
            <NativeBaseProvider initialWindowMetrics={inset}>
                <SignUp />
            </NativeBaseProvider>
        );
        await waitFor(()=>{
            const emailInput = getByTestId('email');
            fireEvent.changeText(emailInput, 'example@test.com');
            expect(emailInput.props.value).toBe('example@test.com');
        })
    });

    it('should update password input value when typing', async () => {
        const { getByTestId } = render(
            <NativeBaseProvider initialWindowMetrics={inset}>
                <SignUp />
            </NativeBaseProvider>
        );
        await waitFor(()=>{
            const emailInput = getByTestId('password');
            fireEvent.changeText(emailInput, 'password');
            expect(emailInput.props.value).toBe('password');
        })
    });

    it('should update confirmPassword input value when typing', async () => {
        const { getByTestId } = render(
            <NativeBaseProvider initialWindowMetrics={inset}>
                <SignUp />
            </NativeBaseProvider>
        );
        await waitFor(()=>{
            const emailInput = getByTestId('confirmPassword');
            fireEvent.changeText(emailInput, 'password');
            expect(emailInput.props.value).toBe('password');
        })
    });

    it('should press button', async () => {
        const mockBtnSignUp = jest.fn();
        const {getByTestId} = render(
            <NativeBaseProvider initialWindowMetrics={inset}>
                <SignUp signUpBtn={mockBtnSignUp}/>
            </NativeBaseProvider>
        );
        fireEvent.press(screen.getByText('Sign up'))
    });
});