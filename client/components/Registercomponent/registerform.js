"use client"
import React from 'react';
import {useState,useEffect} from 'react'

const Registerform=()=>
{

const [formdata,setformdata]=useState({})
const handleChamge=(e)=>{
    setformdata((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
}
;

const handleSubmit=async (e)=>
    {
        e.preventDefault();
        console.log(formdata,"submitting data")
        try{
const response= await fetch ("http://127.0.0.1:8000/register",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata)
}) ;
const data = await response.json();  // ✅ Convert response to JSON

        if (!response.ok) {
            throw new Error(data.detail || "Registration failed");  // ✅ Handle API errors
        }

        console.log("Registration Successful:", data);
        alert("Registration Successful!"); 
        setformdata({})
        }
        catch (error) {
            console.error("Error:", error);
            alert(error.message || "Something went wrong");
        }
        
    }

useEffect(()=>{
    console.log(formdata)

},[formdata])
    return(
        
        <div>
        <form onSubmit={handleSubmit}className='flex flex-col items-center'>
            <label>
                username
            </label>
            <input type="text" name="username" value={formdata.username ||""} onChange={handleChamge} 
            className='w-64 p-2 border border-gray-400 rounded-md' />

            <label>
                password
            </label>
            <input type="password" name="password" value={formdata.password ||""} onChange={handleChamge}
            className='w-64 p-2 border border-gray-600' />
            <button type="submit"  className='bg-slate-500 p-2 text-white text-xl '>
                submit
            </button>
        </form>
        </div>
    )
}
export default Registerform;