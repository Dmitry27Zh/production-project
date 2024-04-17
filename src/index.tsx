import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { WrapperProvider } from 'app/providers/WrapperProvider';
import App from './app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <WrapperProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </WrapperProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
