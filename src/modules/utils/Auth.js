import React, { useEffect, useContext, createContext} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [webUser, setWebUser] = React.useState(null);

    const loginWebuser = (user) => {
        setWebUser(user);
        //console.log(count++);
    }
    const logout = () => {
        setWebUser(null);
    }

   
    
    return(
        <AuthContext.Provider value={{webUser, loginWebuser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}