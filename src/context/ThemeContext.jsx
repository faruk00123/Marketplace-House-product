import { createContext, useEffect, useState } from "react";

export const omor = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme =  () => {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if(isDarkMode){
      document.body.style.backgroundColor = '#111827';
      document.body.style.color = '#ffffff';
    }
    else{
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [isDarkMode])

  return (
    <omor.Provider value={{isDarkMode, toggleTheme}}>
        {children}
    </omor.Provider>
  )
}