import { Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/index.scss'

export const RouterDecorator: Decorator = (story) => {
  return (
    <BrowserRouter>{story()}</BrowserRouter>
  )
}
