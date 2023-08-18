import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/LoggingSlice";

const SignUp = () => {
    const disp = useDispatch()
    const state = useSelector((state) => state.logging)
    
    const nav = useNavigate()
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        cp: "",
    })

    const handlechange = (e) => {
        setdata((preval) => {
            return { ...preval, [e.target.name]: e.target.value }
        })
    }
    const submit = async (e) => {
        e.preventDefault();
        if (!data.name || !data.email || !data.password || !data.age || !data.gender) {
            alert("Please complete the form before submiting")
        }
        else if (data.cp != data.password) {
            alert("password and Confirm password not matched")
        }
        else {
            let res = await fetch(" https://mental-health-project.onrender.com/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    age: data.age,
                    gender: data.gender
                })
            })
            const response = await res.json()

            if (response.status === 201) {
                alert("sign up Succesfull ")
                setdata({
                    name: "",
                    email: "",
                    password: "",
                    age: "",
                    gender: "",
                })
                nav("/login")
            }
            else if (response.status === 409) {
                alert("User already registered")
            }
            
        }
    }
    return (
        <>
            <Navbar />
            <div className="flex mt-[4.9%] items-center justify-center w-[100%] h-96 sm:mt-16 sm:pl-10">
                <form>
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg text-black"
                        type="text"
                        placeholder="name"
                        value={data.name}
                        name="name" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="email"
                        placeholder="email"
                        value={data.email} name="email" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="password"
                        minLength={10}
                        placeholder="password"
                        value={data.password}
                        name="password" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="password"
                        minLength={10}
                        placeholder="confirm password"
                        value={data.cp}
                        name="cp" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="number"
                        placeholder="age"
                        value={data.age}
                        name="age" />
                    <br />
                    <div className="flex mt-4" >
                        <div
                            style={{ border: "2px solid black", marginRight: "20px" }}
                            className="text-center w-32 rounded-lg sm:w-16 hover:bg-gray-600 hover:text-white transition-all"
                            name="gender"
                            value="male"
                            onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, gender: "male" }
                                })
                            }}>Male</div>
                        <div
                            style={{ border: "2px solid black", marginRight: "20px" }}
                            className="text-center w-32 rounded-lg sm:w-16  hover:bg-gray-600 hover:text-white transition-all"
                            name="gender"
                            value="female"
                            onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, gender: "female" }
                                })
                            }}>female</div>
                        <div
                            style={{ border: "2px solid black", marginRight: "20px" }}
                            className="text-center w-32 rounded-lg sm:w-16  hover:bg-gray-600 hover:text-white transition-all"
                            name="gender"
                            value="other"
                            onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, gender: "other" }
                                })
                            }}>other</div>
                    </div>
                    <button
                        style={{ border: "2px solid black" }}
                        className=" mt-3 hover:bg-black hover:text-white text-center w-32 rounded-lg sm:w-16 transition-all"
                        type="submit"
                        onClick={submit}>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;