import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
