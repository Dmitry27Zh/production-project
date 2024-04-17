import React, { useMemo, useRef } from 'react';
import { WrapperContext } from '../lib/WrapperContext';

function WrapperProvider({ children }: React.PropsWithChildren) {
  const elementRef = useRef();
  const defaultProps = useMemo(() => ({ elementRef }), []);

  return (
    <WrapperContext.Provider value={defaultProps}>
      <div ref={elementRef} data-wrapper="all">{children}</div>
    </WrapperContext.Provider>
  );
}

export default WrapperProvider;
