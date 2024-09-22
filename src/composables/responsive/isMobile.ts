import { useEffect, useState } from 'react';

export const IsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return isMobile;
};

