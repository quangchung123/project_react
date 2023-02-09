import React from 'react';
import { useContext } from 'react';
import { UserContext } from './Provider';
import { BrowserRouter as Router,  Outlet, Navigate, useLocation } from 'react-router-dom';

const useAuth = () =>{
  const {user} = useContext(UserContext)
  return user && user.loggedIn;
}
export const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />) :(
   <Navigate to ="/Loggin" />
  )
}
