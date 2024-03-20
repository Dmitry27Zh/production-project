import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router/'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </div>
      <AppRouter />
    </div>
  )
}

export default App
