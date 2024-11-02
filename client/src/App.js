// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';
import Courses from './components/Courses';
import Timetable from './components/Timetable';
import Library from './components/Library';
import Faculty from './components/Faculty';
import Student from './components/Student';

const App = () => {
  const isAuthenticated = Boolean(localStorage.getItem('auth'));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/timetable" element={<Timetable/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route 
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
