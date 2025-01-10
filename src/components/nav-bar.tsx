import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur bg-black bg-opacity-60">
                <div className="text-lg font-bold">
                    <Link className="hover:underline" to="/">SOFTWARE SERVICES</Link>
                </div>
                <ul className="flex space-x-6">
                    <li className="hover:underline cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <Link to="/profile/">Profile</Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <Link to="/about/">About Us</Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <Link to="/contacts/">Contacts</Link>
                    </li>
                    <li className="px-4 py-1 bg-white text-black font-semibold rounded cursor-pointer hover:bg-zinc-300">
                        <Link to="/register/">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

