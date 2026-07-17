'use client';

import { useEffect } from 'react';

export default function useTokenRefresh() {
  useEffect(() => {
    const interval =
      setInterval(async () => {
        try {
          const res =
            await fetch(
              'http://localhost:4001/api/auth/refresh',
              {
                method: 'POST',
                credentials: 'include'
              }
            );

          if (!res.ok) {
            localStorage.removeItem(
              'accessToken'
            );
            return;
          }

          const data =
            await res.json();

          localStorage.setItem(
            'accessToken',
            data.accessToken
          );
        } catch {}
      }, 10 * 60 * 1000);

    return () =>
      clearInterval(interval);
  }, []);
}