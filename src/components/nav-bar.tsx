export default function navBar() {
    {/* Navbar */ }
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
}