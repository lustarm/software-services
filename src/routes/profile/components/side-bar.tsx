import { Link, useLocation } from "react-router-dom";

export default function ProfileSideBar() {
    const location = useLocation()

    const isActive = (path: string) =>
        location.pathname.replace(/\/+$/, '') === path.replace(/\/+$/, '')

    return (
        <div className="bg-zinc-900 text-zinc-200 p-5 h-full w-56 my-6 rounded-md">
            <ul className="space-y-4">
                <li className="rounded-md overflow-hidden">
                    <Link
                        to="/profile/"
                        className={`block p-3 hover:bg-zinc-700 rounded-md
                        transition
                        ${isActive("/profile/") ? 'bg-zinc-500' : 'bg-zinc-800'}`}
                    >
                        Profile
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to="/profile/schedule/"
                        className={`block p-3 hover:bg-zinc-700 rounded-md
                        transition
                        ${isActive("/profile/schedule/") ? 'bg-zinc-500' : 'bg-zinc-800'}`}
                    >
                        Schedule
                    </Link>
                </li>
                <li className="rounded-md overflow-hidden">
                    <Link
                        to="/profile/codeeditor/"
                        className={`block p-3 hover:bg-zinc-700 rounded-md
                        transition
                        ${isActive("/profile/codeeditor/") ? 'bg-zinc-500' : 'bg-zinc-800'}`}
                    >
                        Code Editor
                    </Link>
                </li>
            </ul>
        </div>
    );
}

