import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import NavBar from "../../components/nav-bar";

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const payload = {
            email,
            username,
            password,
        }
        fetch("http://localhost:8000/v1/register", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(payload),
        }).then(response => response.json())
    }, [])

    return (
        <div className="relative bg-cover bg-[url('/src/assets/pxfuel.jpg')]
            bg-center text-white h-screen">

            {/* Navbar */}
            <NavBar />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-full z-10">
                <h1 className="text-5xl font-extrabold">Register</h1>
                <p className="mt-4 max-w-md text-center text-zinc-400">
                    Create an account to start using the platform. Please fill in your details below.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-6 w-full max-w-md">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 text-black rounded bg-zinc-200"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 text-black rounded bg-zinc-200"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 text-black rounded bg-zinc-200"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 text-black rounded bg-zinc-200"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="mt-6 px-6 py-2 bg-zinc-700
                        text-white font-semibold rounded
                        hover:bg-zinc-800 w-full"
                        onClick={() => {}}
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-zinc-400 text-center">
                    Already have an account?{" "}
                    <Link to="/login/" className="text-white underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}

