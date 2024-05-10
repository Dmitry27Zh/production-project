import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { createStore, AppDispatch } from './config/store';
import type { StateSchema } from './config/StateSchema';

export {
  StoreProvider, createStore, StateSchema, ReduxStoreWithManager, AppDispatch,
};
