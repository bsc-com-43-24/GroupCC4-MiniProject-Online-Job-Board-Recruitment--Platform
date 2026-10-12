'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { lightTokens, darkTokens } from '@/theme';

const ThemeContext = createContext({ dark: false, toggle: () => {} });
export const useDarkMode = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      setDark(localStorage.getItem('theme') === 'dark');
    } catch {}
  }, []);

  const toggle = () =>
    setDark((d) => {
      const next = !d;
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {}
      return next;
    });

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <ConfigProvider
        theme={{
          algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: dark ? darkTokens : lightTokens,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}