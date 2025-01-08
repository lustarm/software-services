export default function LandingPage() {
    return (
        <div className="relative bg-black text-white h-screen">
            {
            /* doesn't sit on background fix 
            <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10" 
                style={{ backgroundImage: 'url(/path-to-your-pattern.png)' }}></div>
            */
            }
            
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4">
                <div className="text-lg font-bold">NAME COMPANY</div>
                <ul className="flex space-x-6">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">Profile</li>
                    <li className="hover:underline cursor-pointer">About Us</li>
                    <li className="hover:underline cursor-pointer">Contacts</li>
                    <li className="px-4 py-2 bg-white text-black font-semibold rounded cursor-pointer hover:bg-zinc-300">
                        Sign Up
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-5xl font-extrabold">Software Services</h1>
                <h2 className="mt-2 text-2xl text-gray-300">Fullstack Development</h2>
                <p className="mt-4 max-w-md text-center text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-6 space-x-4">
                    <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded hover:bg-gray-800">
                        Sign Up
                    </button>
                    <button className="px-6 py-2 bg-transparent border border-gray-700 text-white font-semibold rounded hover:bg-gray-700">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
