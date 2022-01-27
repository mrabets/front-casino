import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import {SignIn} from './Pages/SignIn';
import {SignUp} from './Pages/SignUp';
import {Profile} from './Pages/Profile';
import {LiteGame} from './Games/LiteGame';
import {HardGame} from './Games/HardGame';
import {Homepage} from './Pages/Homepage';
import {NotFound} from './Pages/NotFound';
import {Layout} from './Layout/Layout';
import { useAuth } from './hooks/use-auth';
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51KLkAMDdXO9Fb87CsaPmEiGHY1JCejsj4jLvckFMRfM8CEJPHtYWVpQqb42XLPHZ7pbYFHolZtYFqMIL0shqDwNt007evvQO7L");

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
          <Route path="lite_game" element={<LiteGame />} />
          <Route path="hard_game" element={<HardGame />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
