import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Auth from './Auth'
import User  from './User'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />

        <Route path="/user" element={<User />} />

      </Routes>
    </Router>
  );
}

export default App
