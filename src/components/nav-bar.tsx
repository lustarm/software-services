export default function NavBar() {
    return(
        <>
            {/* Navbar */ }
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4">
                <div className="text-lg font-bold">SOFTWARE SERVICES</div>
                <ul className="flex space-x-6">
                    <li className="hover:underline cursor-pointer"><a href="/">Home</a></li>
                    <li className="hover:underline cursor-pointer"><a href="/profile">Profile</a></li>
                    <li className="hover:underline cursor-pointer"><a href="/about">About Us</a></li>
                    <li className="hover:underline cursor-pointer"><a href="/contacts">Contacts</a></li>
                    <li className="px-4 py-1 bg-white text-black font-semibold rounded cursor-pointer hover:bg-zinc-300">
                        <a href="/register">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
