import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (state: StateSchema) => (StoryComponent: StoryFn) => {
  return <StoreProvider initialState={state}><StoryComponent /></StoreProvider>
}
