import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((routeProps) => (
          <Route key={routeProps.path} {...routeProps}></Route>
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
