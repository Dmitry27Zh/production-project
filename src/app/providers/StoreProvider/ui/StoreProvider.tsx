import React from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps extends React.PropsWithChildren {
  initialState?: StateSchema
  asyncReducers?: ReducersMapObject
}

export function StoreProvider({ children, initialState, asyncReducers }: StoreProviderProps) {
  const store = createStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
}
