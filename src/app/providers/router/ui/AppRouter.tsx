import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((routeProps) => (
          <Route
            key={routeProps.path}
            {...routeProps}
            element={<div className="page-wrapper">{routeProps.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
