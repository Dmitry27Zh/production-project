import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map((routeProps) => (
        <Route
          key={routeProps.path}
          {...routeProps}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{routeProps.element}</div>
            </Suspense>
)}
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
