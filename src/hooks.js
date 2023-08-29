// NOTE: Patch-Aug.30,2023: Updates for migrate from react @^ 16.4.0 to react @^ 18.2.0
//   with Node.js version lock >= 18.16.0, Lock to use only YARN.
// by @sujii

import { useCallback, useEffect, useRef } from 'react';

export const useMounted = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const fn = useCallback(() => mountedRef.current, []);

  return fn;
};
