import React ,{useState}from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Auth from './Auth'
import LoginHead from "./LoginHead";
import  TotalStudents from './TotalStudents'
import RegisterStudents from './RegisterStudents'
import SetAttendence from './SetAttendence'
import Admin from './Admin'
import Attendence from './Attendence'
const App = () => {
let[Email,setEmail]=useState('');
console.log(Email)
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<LoginHead />} />
        <Route path="/" element={<Auth setEmail={setEmail} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/Attendence" element={<Attendence Email={Email}/>} />
        <Route path="/admin/RegisterStudents" element={<RegisterStudents />} />
        <Route path="/admin/TotalStudents" element={<TotalStudents />} />
        <Route path="/admin/SetAttendence" element={<SetAttendence />} />
      </Routes>
    </Router>
  );
}

export default App
