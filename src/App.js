import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Loginpage from './Page/Login/Loginpage';
import Main from './Page/Home/Main';
import { ProtectedRoutes } from './ProtectedRoutes';
import { useContext } from 'react';
import { UserContext } from './Provider';

function App() {
  const {user} = useContext(UserContext)
  return (
    <div className='App'>
      <Routes>
            <Route path='/Login' element={ user.loggedIn? <Navigate to={"/Header"} />: <Loginpage/>}/>
            <Route path='*' element={<Navigate to={"/Login"} /> } />
            <Route element = {<ProtectedRoutes/>}>
              <Route path='/Header' element={user.loggedIn ? <Main/> : <Navigate to="/Login"/>}/>
            </Route>
      </Routes>
    </div>
  )
}

export default App;

