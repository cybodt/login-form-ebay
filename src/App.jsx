import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route
            path='/createanaccount'
            element={[
              <CreateAccount />
            ]}
          />
          <Route
            path='/signin'
            element={[
              <SignIn key='1' />
            ]}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;