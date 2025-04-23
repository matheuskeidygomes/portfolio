import { useLayoutEffect, useRef } from 'react';

export const useScrollLock = (lock: boolean) => {
  const scrollPositionRef = useRef(0);

  useLayoutEffect(() => {
    if (lock) {
      scrollPositionRef.current = window.scrollY;
      
      // Apply fixed position with appropriate offset
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.position = 'fixed';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      // Restore the position settings
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      // Restore the scroll position
      window.scrollTo(0, scrollPositionRef.current);
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [lock]);
}; 