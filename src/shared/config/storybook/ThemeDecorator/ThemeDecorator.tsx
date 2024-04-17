import { StoryFn } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { WrapperProvider } from 'app/providers/WrapperProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <WrapperProvider>
      <ThemeProvider initialTheme={theme}>
        <StoryComponent />
      </ThemeProvider>
    </WrapperProvider>
  )
}
