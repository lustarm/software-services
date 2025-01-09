import NavBar from "../components/nav-bar";

export default function LandingPage() {
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
                <h1 className="text-5xl font-extrabold">Software Services</h1>
                <h2 className="mt-2 text-2xl text-zinc-300">Fullstack Development</h2>
                <p className="mt-4 max-w-md text-center text-zinc-400">
                    Want to learn how to code, but don't know where to start?
                    <br />
                    Sign up today and start learning!
                </p>
                <div className="mt-6 space-x-4">
                    <button className="px-6 py-2 bg-zinc-700 text-white font-semibold rounded hover:bg-zinc-800">
                        Sign Up
                    </button>
                    <button className="px-6 py-2 bg-transparent border border-zinc-700 text-white font-semibold rounded hover:bg-zinc-700">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

