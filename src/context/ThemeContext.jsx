import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('app:theme'));

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add("dark")
      localStorage.setItem('app:theme', "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem('app:theme', "light")
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)