import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Exercises from "./pages/Excercises";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import Test from "./pages/Test";
import { login } from "./store/slice/LoggingSlice";
import Error from "./pages/Error";


const App = () => {
  const state = useSelector((state) => state.logging)
  const disp = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      disp(login())
    }
  }, [])
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="*" element={<Error />} />

        {state.isloggedin && <Route path="/contact" element={<Contact />} />}
        {state.isloggedin && <Route path="/test" element={<Test />} />}

      </Routes>
    </>
  )
}

export default App;