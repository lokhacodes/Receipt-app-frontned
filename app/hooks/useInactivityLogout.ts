'use client';

import { useEffect } from 'react';

export default function useInactivityLogout() {
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const logout = async () => {
      await fetch(
        'http://localhost:4001/api/auth/logout',
        {
          method: 'POST',
          credentials: 'include'
        }
      );

      localStorage.removeItem(
        'accessToken'
      );

      window.location.href = '/';
    };

    const resetTimer = () => {
      clearTimeout(timeout);

      timeout = setTimeout(
        logout,
        5 * 60 * 1000
      );
    };

    window.addEventListener(
      'mousemove',
      resetTimer
    );

    window.addEventListener(
      'keydown',
      resetTimer
    );

    window.addEventListener(
      'click',
      resetTimer
    );

    resetTimer();

    return () => {
      clearTimeout(timeout);

      window.removeEventListener(
        'mousemove',
        resetTimer
      );

      window.removeEventListener(
        'keydown',
        resetTimer
      );

      window.removeEventListener(
        'click',
        resetTimer
      );
    };
  }, []);
}


