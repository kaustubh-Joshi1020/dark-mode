import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    DarkTheme : () =>{},
    LightTheme : () =>{}
}); // we can pass default values to the context , who will using the context get
    //  this values by default

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
    }   