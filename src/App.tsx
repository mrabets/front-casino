import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import {SignIn} from './Pages/SignIn';
import {SignUp} from './Pages/SignUp';
import {Profile} from './Pages/Profile';
import {Homepage} from './Pages/Homepage';
import {NotFound} from './Pages/NotFound';
import {Layout} from './Layout/Layout';
import { useAuth } from './hooks/use-auth';

const App: React.FC = () => {
  const {isAuth} = useAuth()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {
            !isAuth && 
            <>
              <Route path="sign_in" element={<SignIn />} />
              <Route path="sign_up" element={<SignUp />} />
            </>
          }
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
