import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
