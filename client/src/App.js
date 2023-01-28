import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {AuthContext} from './context/authContext/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={user ?<Home /> : <Navigate to="/login" />} />
          <Route path="/movies" element={user ? <Home type = {"movies"}/> : <Navigate to="/login" /> }/>
          <Route path="/series" element={user ? <Home type = {"series"}/> : <Navigate to="/login" />} />
          <Route path="/watch/:movieId" element={user ?<Watch/> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ?<Login/> : <Navigate to="/" />} />
          <Route path="/register" element={!user ?<Register/> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
