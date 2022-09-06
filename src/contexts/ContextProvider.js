import React, {createContext, useContext, useState} from "react";

const StateContext=createContext()

const initialState={
    cart: false,
    chat: false,
    notification: false,
    userProfile: false
}

export const ContextProvider = ({ context }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
  
    const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
    };
  
    const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
    };
  
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  
    return (
      <StateContext.Provider value={{activeMenu, currentColor, currentMode, handleClick, isClicked, initialState, screenSize, setActiveMenu, setColor, setCurrentColor, setCurrentMode, setIsClicked, setMode, setScreenSize, setThemeSettings, themeSettings}}>
        {context}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);