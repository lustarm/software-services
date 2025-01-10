import { Link } from "react-router-dom"

import NavBar from "../../components/nav-bar";

export default function LoginPage() {
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
                <form className="mt-8 space-y-6 w-full max-w-md">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 text-black rounded bg-zinc-200"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
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

