import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import NavBar from "@/components/nav-bar";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateEmail = (value: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
    };

    const validatePassword = (value: string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{8,}$/;
        return passwordRegex.test(value);
    };

    const validateConfirmPassword = () => {
        return password === confirmPassword;
    };

    const validateForm = () => {
        if (!email || !username || !password || !confirmPassword) {
            setErrorMessage("Please fill out all fields.");
            return false;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email address.");
            return false;
        }

        if (!validatePassword(password)) {
            setErrorMessage(
                "Password must be at least 8 characters, include an uppercase letter, and a special character."
            );
            return false;
        }

        if (!validateConfirmPassword()) {
            setErrorMessage("Passwords do not match.");
            return false;
        }

        setErrorMessage(""); // Clear error if all validations pass
        return true;
    };

    const handleRegister = async () => {
        if (!validateForm()) {
            setIsError(true);
            return;
        }

        const payload = { role: "Basic", email, username, password };

        try {
            const resp = await fetch("http://localhost:8000/v1/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!resp.ok) {
                const errdata = await resp.json()
                setIsError(true)
                setErrorMessage(errdata.message || "An error occurred.")
                return
            }

            const data = await resp.json()
            localStorage.setItem("Authorization", data.message)
            navigate("/profile/")
        } catch (error) {
            console.error(error)
            setIsError(true)
            setErrorMessage(
                "An unknown error has occurred. Please try again later."
            )
        }
    }

    return (
        <div
            className="relative bg-cover bg-[url('/src/assets/pxfuel.jpg')]
                bg-center text-white h-screen"
        >
            <NavBar />
            <div className="flex flex-col items-center justify-center h-full z-10">
                <h1 className="text-5xl font-extrabold">Register</h1>
                <p className="mt-4 max-w-md text-center text-zinc-400">
                    Create an account to start using the platform. Please fill in
                    your details below.
                </p>
                <form
                    className="mt-8 space-y-6 w-full max-w-md"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="focus:border-none w-full px-4 py-2 text-black rounded bg-zinc-200"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="focus:border-none w-full px-4 py-2 text-black rounded bg-zinc-200"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="focus:border-none w-full px-4 py-2 text-black rounded bg-zinc-200"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="focus:border-none w-full px-4 py-2 text-black rounded bg-zinc-200"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {isError && (
                        <p className="mt-4 max-w-md text-sm text-red-400">
                            {errorMessage}
                        </p>
                    )}
                    <button
                        className="mt-6 px-6 py-2 bg-zinc-700 text-white
                        font-semibold rounded hover:bg-zinc-800 w-full"
                        onClick={handleRegister}
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

