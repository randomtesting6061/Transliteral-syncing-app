"use client";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem("token"); // ✅ Get JWT from localStorage

                if (!token) {
                    throw new Error("No token found, please log in.");
                }

                const response = await fetch("http://127.0.0.1:8000/protected-route", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, // ✅ Send JWT token in headers
                    }
                });

                if (!response.ok) {
                    throw new Error("Unauthorized: Please log in again.");
                }

                const data = await response.json();
                setUserData(data.user);

            } catch (error) {
                console.error("Error fetching protected route:", error);
                setError(error.message);
            }
        };

        fetchProtectedData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            {error ? (
                <p className="text-red-500">{error}</p>
            ) : userData ? (
                <div className="border p-4 rounded-md bg-gray-100">
                    <p>Welcome, <strong>{userData.sub}</strong>!</p>
                    <p>Your authentication is successful. 🚀</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default Dashboard;
