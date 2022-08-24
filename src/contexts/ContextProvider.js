import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// make the cart, chat, etc. be close at the beginning 
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};
 // childeren allow you return the context of the actual page
export function ContextProvider({ children  }){
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    function setMode(e){
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

    };

    function setColor(color){
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);

    };

    function handleClick(clicked){
        // this spread the intial state and will only change the value that have benn clicked
        setIsClicked({...initialState,[clicked]:true})
    }
    return(
        <StateContext.Provider value={{ initialState, activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode, setCurrentColor, setCurrentMode, themeSettings, setThemeSettings, setMode, setColor }}>
            {children}
        </StateContext.Provider>
    );
};

// getting the data from the context by using the context (specifically
// at the StateContext)
export const useStateContext = () => useContext(StateContext);