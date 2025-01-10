import NavBar from "@/components/nav-bar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SchedulePage() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    let token = localStorage.getItem("Authorization")

    useEffect(() => {
        if(!token) {
            navigate("/login/")
        }

        setLoading(false)

    }, [token])

    if( loading ) {

        return(
            <div className="relative bg-black bg-opacity-60 text-white h-screen">
            </div>
        )
    }

    return (
        <div className="relative bg-cover bg-[url('/src/assets/pxfuel.jpg')]
            bg-center backdrop-blur-sm text-white h-screen">

            {/* Navbar */}
            <NavBar />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-full z-10">
                <h1 className="text-5xl font-extrabold">Your Schedule</h1>
                <p className="mt-4 max-w-lg text-center text-zinc-400">
                    Here’s your upcoming schedule. Stay organized and on top of your commitments!
                </p>

                {/* Schedule Table */}
                <div className="mt-8 w-full max-w-4xl bg-zinc-800 bg-opacity-70 rounded-lg shadow-lg">
                    <table className="w-full text-left text-white">
                        <thead>
                            <tr className="bg-zinc-700">
                                <th className="px-4 py-3 font-semibold">Date</th>
                                <th className="px-4 py-3 font-semibold">Time</th>
                                <th className="px-4 py-3 font-semibold">Event</th>
                                <th className="px-4 py-3 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example Schedule Entries */}
                            <tr className="border-b border-zinc-600 hover:bg-zinc-700">
                                <td className="px-4 py-3">January 10, 2025</td>
                                <td className="px-4 py-3">10:00 AM</td>
                                <td className="px-4 py-3">Team Meeting</td>
                                <td className="px-4 py-3 text-center">
                                    <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-b border-zinc-600 hover:bg-zinc-700">
                                <td className="px-4 py-3">January 12, 2025</td>
                                <td className="px-4 py-3">3:00 PM</td>
                                <td className="px-4 py-3">Client Presentation</td>
                                <td className="px-4 py-3 text-center">
                                    <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                            {/* Add more rows dynamically as needed */}
                        </tbody>
                    </table>
                </div>

                {/* Add Event Button */}
                <div className="mt-6">
                    <button className="px-6 py-2 bg-zinc-700 text-white font-semibold rounded hover:bg-zinc-800">
                        Add Event
                    </button>
                </div>
            </div>
        </div>
    );
}

