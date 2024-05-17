import { ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "../../../../entities/Profile";
import { loginReducer } from "features/AuthByUsername";

const defaultAsyncReducers: ReducersMapObject = {
  login: loginReducer,
  profile: profileReducer
}

export const StoreDecorator = (state: StateSchema, asyncReducers?: ReducersMapObject) => (StoryComponent: StoryFn) => {
  return <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
      <StoryComponent />
    </StoreProvider>
}
