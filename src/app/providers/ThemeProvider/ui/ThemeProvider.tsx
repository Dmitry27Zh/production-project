import React, { useEffect, useMemo, useState } from 'react';
import { useWrapper } from 'app/providers/WrapperProvider';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

interface ThemeProviderProps extends React.PropsWithChildren {
  initialTheme?: Theme
}

function ThemeProvider({ children, initialTheme = defaultTheme }: ThemeProviderProps) {
  const { element } = useWrapper();
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    if (element) {
      element.setAttribute('data-theme', theme);
    }
  }, [element, theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
