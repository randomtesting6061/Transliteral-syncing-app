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

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formdata,"reg")
};

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