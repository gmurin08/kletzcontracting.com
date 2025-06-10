// hooks/useIsMobile.js
import { useState, useEffect } from 'react';

const useMobileResponse = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if window is available (for SSR)
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth < breakpoint);
      
      // Handler for window resize
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [breakpoint]);
  
  return isMobile;
};

export default useMobileResponse;