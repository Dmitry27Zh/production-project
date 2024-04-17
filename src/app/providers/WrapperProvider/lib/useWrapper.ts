import { useContext, useEffect, useState } from 'react';
import { WrapperContext } from './WrapperContext';

interface UseWrapperResult {
  element: HTMLElement | null
}

export const useWrapper = (): UseWrapperResult => {
  const { elementRef } = useContext(WrapperContext);
  const [element, setElement] = useState(null);
  useEffect(() => {
    if (elementRef.current) {
      setElement(elementRef.current);
    }
  }, [elementRef]);

  return { element };
};
