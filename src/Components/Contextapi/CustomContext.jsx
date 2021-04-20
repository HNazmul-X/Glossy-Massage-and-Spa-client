import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';



export const UserContext = createContext()

const CustomContext = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({
        isLoggedIn:false
    });
    return (
        <UserContext.Provider value={{loggedInUser,setLoggedInUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default CustomContext;