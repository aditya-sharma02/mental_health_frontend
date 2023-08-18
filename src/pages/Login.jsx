import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/LoggingSlice";
import { useNavigate } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri"

const Login = () => {
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const handlechange = (e) => {
        setdata((preval) => {
            return { ...preval, [e.target.name]: e.target.value }
        })
    }
    
    const submit = async (e) => {
        e.preventDefault();
        if (!data.email) {
            alert("Enter Valid Email")
        }
        if (!data.password) {
            alert("Enter password")
        }
        else {
            let res = await fetch(" http://localhost:5000/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                })
            })
            const response = await res.json()
            // console.log(response.isuser._id)
            if (response.status === 200) {
                localStorage.setItem("userId", response.isuser._id)
                dispatch(login());
                nav("/")
                setdata({
                    email: "",
                    password: ""
                })
            }
            else if (response.status === 401) {
                alert("invalid credentials")
            }
            
        }
    }



    return (
        <>
            <Navbar />
            <div className="flex flex-wrap mt-[4.9%]  w-screen justify-center items-center h-96 sm:h-auto sm:mt-28">

                <div className=" flex justify-center text-[300px] text-gray-900 items-center w-[50%] h-[100%] sm:h-auto" >
                    <RiAccountCircleFill className="" />
                </div>

                <div className="flex sm:justify-center items-end justify-start w-[50%] sm:w-[100%] ">
                    <form>
                        <label htmlFor="html">Email</label><br />
                        <input onChange={handlechange} style={{ border: "1px solid black" }} className="w-72 mt-5 p-1 rounded-lg" type="email" placeholder="email" value={data.email} name="email" required={true} />
                        <br />
                        <label htmlFor="html">Password</label><br />
                        <input onChange={handlechange} style={{ border: "1px solid black" }} className="w-72 mt-5 p-1 rounded-lg" type="password" placeholder="password" value={data.password} name="password" required={true} />
                        <br />
                        <button style={{ border: "2px solid black" }} type="submit" className="mt-5 pl-5 pr-5 pt-3 pb-3 rounded-lg hover:bg-black hover:text-white transition-all sm:mb-5" onClick={submit}>click me</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;