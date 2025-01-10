import NavBar from "@/components/nav-bar";
import ProfileSideBar from "@/routes/profile/components/side-bar";
import useAuthCheck from "@/util/check-auth";
import { useEffect, useState } from "react";

export default function SchedulePage() {
    useAuthCheck()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    if(loading) {
        return
    }

    return (
        <div className="relative bg-cover bg-[url('/src/assets/pxfuel.jpg')]
            bg-center backdrop-blur-sm text-white h-screen">

            <div className="h-16">
                <NavBar />
            </div>

            <div className="flex flex-1">
                <ProfileSideBar />

                <div className="flex-1 p-6">
                    {/* Profile Header */}
                    <div className="flex items-center space-x-4 mb-5
                        bg-zinc-800 p-5 rounded-md">
                        <div className="w-16 h-16 bg-zinc-700 rounded-full"></div>
                        <div>
                            { /* == if shows up when loading it will just be ... */ }
                            <div className="font-bold text-lg">User Name</div>
                            <div className="text-sm text-zinc-400">Role: User</div>
                        </div>
                    </div>

                    {/* Main Content Panels */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-zinc-800 p-5 rounded-md h-40"></div>
                        <div className="bg-zinc-800 p-5 rounded-md h-40"></div>
                        <div className="bg-zinc-800 p-5 rounded-md h-40"></div>
                    </div>

                    <div className="mt-5 bg-zinc-800 p-5 rounded-md h-60"></div>
                </div>
            </div>
        </div>
    )
}

