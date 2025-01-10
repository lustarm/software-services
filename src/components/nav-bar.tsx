import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <nav className="absolute top-0 left-0 w-full flex justify-between
                items-center px-8 py-4 backdrop-blur bg-black bg-opacity-85">
                <div className="text-lg font-bold">
                    <Link className="hover:underline" to="/">SOFTWARE SERVICES</Link>
                </div>
                <ul className="flex space-x-6">
                    <li >
                        <Link to="/" className="hover:underline">Home</Link>
                    </li>
                    <li >
                        <Link to="/profile/" className="hover:underline">Profile</Link>
                    </li>
                    <li >
                        <Link to="/about/" className="hover:underline">About Us</Link>
                    </li>
                    <li >
                        <Link to="/contacts/" className="hover:underline">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/register/" className="hover:underline
                            px-4 py-1 bg-white text-black font-semibold
                            rounded cursor-pointer hover:bg-zinc-300">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

