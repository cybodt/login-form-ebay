import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUpWelcome from './components/SignUpWelcome';
import SignUpPersonal from './components/SignUpPersonal';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route
            path='/signuppersonal'
            element={[
              <SignUpWelcome key='1' />,
              <SignUpPersonal key='2' />
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