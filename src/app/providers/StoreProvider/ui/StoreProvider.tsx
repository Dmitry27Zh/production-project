import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps extends React.PropsWithChildren {
  initialState?: StateSchema
}

export function StoreProvider({ children, initialState }: StoreProviderProps) {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
}
