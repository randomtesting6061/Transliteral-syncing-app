"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/store/authSlice";
import Link from "next/link";

const Navbar = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push("/");  // ✅ Redirect to home after logout
    };

    return (
        <nav className="bg-gray-200 p-4">
            <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">Transliteral Syncing App</div>
                <ul className="flex space-x-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                </ul>
                <div>
                    {isAuthenticated ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <Link href="/Login">Login</Link>
                            <Link href="/Register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
