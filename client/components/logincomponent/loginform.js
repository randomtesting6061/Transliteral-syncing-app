"use client"
import React from 'react';
import { useState,useEffect } from 'react';



const Loginform=()=>
{
const [Formdata,setformdata]=useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata((prev)=>({
            ...prev,
            [name]: value
        }));
       
       
    };
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(Formdata,"submitting data")
        setformdata({})
    }

    useEffect(()=>
    {
        console.log(Formdata)

    },[Formdata])



    return(
        <div >
            <form  onSubmit={handleSubmit}className='flex  items-center flex-col h-screen'>
                <label>
                    Username
                </label>
                <input 
                type="text" 
                name="username" 
                value={Formdata.username || ""} 
                onChange={handleChange} 
                className="border border-gray-300 rounded-md p-2 w-64"
            />
            <label>
                password
            </label>
            <input type="password" name="password" value={Formdata.password ||""}
            onChange={handleChange}
            className='border border-gray-400 rounded-md p-2 w-64' />
            <button type='submit' className='border-black text-white font-mono bg-blue-600 p-2'>
                submit
            </button>
            </form>
        </div>
    );

}
export default Loginform;