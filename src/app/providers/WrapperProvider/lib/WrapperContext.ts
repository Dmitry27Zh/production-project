import React, { createContext } from 'react';

interface WrapperContextProps {
  elementRef?: React.RefObject<HTMLElement>
}

export const WrapperContext = createContext<WrapperContextProps>({});
