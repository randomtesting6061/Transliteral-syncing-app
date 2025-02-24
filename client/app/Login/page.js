"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";  // ✅ Use Next.js Router
import { login } from "@/store/authSlice";

const Loginform = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [Formdata, setformdata] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Formdata),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Login failed");
            }

            console.log("Login Successful! Token:", data.access_token);
            dispatch(login(data.access_token));  // ✅ Save token in Redux & localStorage
            router.push("/dashboard");  // ✅ Redirect to dashboard
        } catch (error) {
            console.error("Error:", error);
            alert(error.message || "Something went wrong");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center flex-col h-screen">
                <label>Username</label>
                <input type="text" name="username" value={Formdata.username || ""} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-64" />
                
                <label>Password</label>
                <input type="password" name="password" value={Formdata.password || ""} onChange={handleChange} className="border border-gray-400 rounded-md p-2 w-64" />
                
                <button type="submit" className="border-black text-white font-mono bg-blue-600 p-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Loginform;
