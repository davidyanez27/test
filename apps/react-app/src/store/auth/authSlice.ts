import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
    id?: string;
    name?: string;
    email?: string;
}

interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    user: User;
    errorMessage?: string;
}

const initialState: AuthState = {
    status: 'not-authenticated',
    user: {},
    errorMessage: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, action: PayloadAction<User>) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, action: PayloadAction<string | undefined>) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = action.payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
    },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;
