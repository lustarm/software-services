import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import NavBar from "@/components/nav-bar";

export default function LoginPage() {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleLogin = async () => {
        try {
            const payload = { username: username, password: password }
            const resp = await fetch("http://localhost:8000/v1/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })

            if(!resp.ok) {
                const errdata = await resp.json();
                setIsError(true);
                setErrorMessage(errdata.message || "An error occurred.");
                return;
            }

            const data = await resp.json()
            localStorage.setItem("Authorization", data.message)
            navigate("/profile/")
        } catch (error) {
            console.error(error)
            setIsError(true)
            setErrorMessage("An unknown error has occurred. Please try again later.")
        }
    }

    return (
        <div className="relative bg-cover bg-[url('/src/assets/pxfuel.jpg')]
            bg-center text-white h-screen">

            {/* Navbar */}
            <NavBar />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-full z-10">
                <h1 className="text-5xl font-extrabold">Login</h1>
                <p className="mt-4 max-w-md text-center text-zinc-400">
                    Welcome back! Please enter your credentials to access your account.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-6 w-full max-w-md"
                onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 text-black rounded bg-zinc-200"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 text-black rounded bg-zinc-200"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {isError && (
                        <p className="mt-4 max-w-md text-sm text-red-400">
                            {errorMessage}
                        </p>
                    )}

                    {/* Submit Button */}
                    <button className="mt-6 px-6 py-2 bg-zinc-700
                        text-white font-semibold rounded
                        hover:bg-zinc-800 w-full"
                        onClick={handleLogin}
                    >
                        Log In
                    </button>
                </form>

                <p className="mt-4 text-zinc-400 text-center">
                    Don't have an account?{" "}
                    <Link to="/register/" className="text-white underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}

