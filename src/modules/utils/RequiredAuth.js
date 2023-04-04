import React from 'react';
import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RequiredAuth = ({children}) => {
    const auth = useAuth();
    //console.log(auth.webUser);
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    //console.log(userData);
    if(!userData){
        return <Navigate to="/login"/>
    }
    return children;
};
