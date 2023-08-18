import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/LoggingSlice";
const Blogs = () => {
    const [data, setdata] = useState()
    const [loading, setloading] = useState(false)
    const disp = useDispatch()
    const state = useSelector((state) => state.logging)
    
    // useEffect(() => {
    //     const submit = async () => {
    //         setloading(true);
    //         try {
    //             const response = await fetch("http://localhost:5000/getblogs")
    //             const data = await response.json()
    //             // console.log(data.articles)
    //             setdata(data.articles)
    //             // console.log(data)
    //             setloading(false)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     submit();
    // }, [])
    // const d1 = {
    //     author
    //         :
    //         "Rick Rojas, Anna Betts",
    //     content
    //         :
    //         "Supporters of the measures have argued that they protect children from medical treatments they see as risky and unproven. On Wednesday, state Rep. Hugh Blackwell, a Republican, said that the laws of … [+3435 chars]",
    //     description
    //         :
    //         "North Carolina became the latest state to block minors from having access to gender-transition care, as Republican lawmakers voted Wednesday to override the governor’s veto of a bill restricting hormone treatments, puberty blockers and surgeries for young peo…",
    //     publishedAt
    //         :
    //         "2023-08-17T01:20:25Z",
    //     source
    //         :
    //         { id: null, name: 'The Boston Globe' },
    //     title
    //         :
    //         "North Carolina bans transgender care for minors as Republicans override veto",
    //     url
    //         :
    //         "https://www.bostonglobe.com/2023/08/16/nation/north-carolina-transgender-affirming-care/",
    //     urlToImage
    //         : "https://2.bp.blogspot.com/-1DO0SW3US90/ViDunJKlOyI/AAAAAAAA5Wk/1hIjw3VQTx0/s1600/6906500-lake-mountain-landscapes.jpg",
    // }
    if (loading === true) {
        return <div className="text-5xl">LOADING .......</div>
    }
    return (
        <>
            <Navbar />
            {/* <h1 className="text-5xl text-black mt-28">ldmcldcmdl,</h1> */}
            <div className="w-screen mt-28 flex-col h-auto items-center">
                {/* {data?.map((elem, id) => {
                    return (
                        <a key={id} href={d1.url}>
                            <div className="w-[60%] m-auto mt-16 h-auto">
                                <div className="w-[100%]"><img src={elem.urlToImage} /></div>
                                <div className="text-2xl font-bold">{elem.title}</div>
                                <div className="w-[100%] mt-10 text-l font-semibold" >{elem.content}</div>
                                <div className="mt-5">{elem.author}</div>
                            </div>
                        </a>
                    )
                })} */}
            </div>
            <Footer />
        </>
    )
}

export default Blogs;