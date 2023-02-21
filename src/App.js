import React ,{useState}from 'react'
import { Home, Student, Admin, Register, s } from "./Pages/exports";
import { Addstudent, AllStudents} from "./Pages/Admin_tasks/exports";
import {ViewProfile} from './Pages/Student_tasks/exports'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/Add Student" element={<Addstudent />} />
        <Route path="/admin/All Students" element={<AllStudents />} />
        <Route path="/student/View Profile" element={<ViewProfile />} />
      </Routes>
    </Router>
  );
}

export default App
