import NavBar from "../../components/nav-bar";

export default function LoginPage() {
    return (
        <div className="relative bg-black bg-opacity-60 text-white h-screen">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10 -z-10"
                style={{ backgroundImage: `url(/src/assets/pxfuel.jpg)` }}
            ></div>

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
                    <button className="mt-6 px-6 py-2 bg-zinc-700 text-white font-semibold rounded hover:bg-zinc-800 w-full">
                        Log In
                    </button>
                </form>

                <p className="mt-4 text-zinc-400 text-center">
                    Don't have an account?{" "}
                    <a href="/register" className="text-white underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
}

