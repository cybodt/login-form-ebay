import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route
            path='/createaccount'
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