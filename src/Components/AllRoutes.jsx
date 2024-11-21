import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';
import HomePage from '../Pages/HomePage';
import Events from '../Pages/Events';
import Resources from '../Pages/Resources';
import ChatRoom from '../Pages/ChatRoom';
import Settings from '../Pages/Settings';
import Profile from '../Pages/Profile';
import Register from '../Pages/Registration';

function AllRoutes() {
  return (
    <div>
         <Routes>
            <Route path='/' element={
              <PrivateRoute>
                <HomePage/>
              </PrivateRoute>
            }/>
            <Route path='/login' element={
              <Login/>
            }/>

            <Route path='/register' element={
              <Register/>
            }/>


            <Route path='/resources' element={
              <PrivateRoute>
              <Resources/>
              </PrivateRoute>
            }/>

            <Route path='/chatroom' element={
              <PrivateRoute>
              <ChatRoom/>
              </PrivateRoute>
            }/>


            <Route path='/events' element={
              <PrivateRoute>
              <Events/>
              </PrivateRoute>
            }/>


            <Route path='/profile' element={
              <PrivateRoute>
              <Profile/>
              </PrivateRoute>
            }/>


            <Route path='/setting' element={
              <PrivateRoute>
              <Settings/>
              </PrivateRoute>
            }/>

        </Routes>
    </div>
  )
}

export default AllRoutes;