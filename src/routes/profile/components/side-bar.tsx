import { Link } from "react-router-dom";

export default function ProfileSideBar() {
    return (
        <div className="bg-zinc-900 text-zinc-200 p-5 h-full w-56 my-6 rounded-md">
            <ul className="space-y-4">
                <li className="rounded-md overflow-hidden">
                    <Link
                        to="/profile/"
                        className="block p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition"
                    >
                        Profile
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to="schedule/"
                        className="block p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition"
                    >
                        Schedule
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to=""
                        className="block p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition"
                    >
                        Salary Details
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to=""
                        className="block p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition"
                    >
                        Time Off
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to=""
                        className="block p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition"
                    >
                        Documents
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to=""
                        className="block p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition"
                    >
                        Training
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to="benefits/"
                        className="block p-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition"
                    >
                        Benefits
                    </Link>
                </li>
            </ul>
        </div>
    );
}

