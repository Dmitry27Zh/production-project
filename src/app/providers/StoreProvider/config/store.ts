import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { createReducerManager } from './reducerManager'

export function createStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }
  const reducerManager = createReducerManager(rootReducer)
  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
