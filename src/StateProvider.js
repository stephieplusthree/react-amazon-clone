import React, { createContext, useContext, useReducer } from "react";

//prepares the dataLayer
export const StateContext = createContext();

//wrap our app and provide the Data layer to every component inside the app
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);