import React ,{useState}from 'react'
import { Home, Student, Admin, Register } from "./Pages/exports";
import { Addstudent, DeleteStudents,SetAttendance,AddYear,AddBranch, AddSubjects,Update, UpdateStudents} from "./Pages/Admin_tasks/exports";
import {ViewProfile,ViewAttendance} from './Pages/Student_tasks/exports'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
                    
                  
                    let [student, setstudent] = useState("");
                    let [RollNo1, setRollNo1] = useState("");
                    let [image, setimage] = useState("");

                    return (
                      <Router>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route
                            path="/student"
                            element={
                              <Student
                                student={student}
                                setimage={setimage}
                                setstudent={setstudent}
                                setRollNo1={setRollNo1}
                              />
                            }
                          />
                          <Route path="/admin" element={<Admin />}></Route>
                          <Route
                            path="/admin/register"
                            element={<Register />}
                          />
                          <Route
                            path="/admin/Add Student"
                            element={<Addstudent />}
                          />
                          <Route
                            path="/admin/Set Attendance"
                            element={<SetAttendance />}
                          />

                          <Route
                            path="/admin/Delete Students"
                            element={<DeleteStudents />}
                          />
                          <Route
                            path="/student/View Profile"
                            element={
                              <ViewProfile image={image} />
                            }
                          />  
                          <Route
                            exact path="/admin/Update Students"
                            element={
                           <UpdateStudents/>
                            }
                          />
                           <Route
                          path='/admin/Update Student'
                          element={
                         <Update/>
                          }
                        />
                            
                         
                              <Route
                            path="/admin/Add Year"
                            element={
                              <AddYear/>
                            }
                          /> <Route
                          path="/admin/Add Branch"
                          element={
                            <AddBranch/>
                          }
                        />
                           <Route
                          path="/admin/Add Subjects"
                          element={
                            <AddSubjects />
                          }
                        />
                        <Route
                          path="/student/View Attendance"
                          element={
                            <ViewAttendance RollNo={RollNo1}/>
                          }
                        />
                    
                    
                        </Routes>

                      </Router>
                    );
                  }

export default App
