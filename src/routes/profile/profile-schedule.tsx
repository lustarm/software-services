import { Scheduler } from "@aldabil/react-scheduler"

import NavBar from "@/components/nav-bar";
import ProfileSideBar from "@/routes/profile/components/side-bar";

import useAuthCheck from "@/util/check-auth";

export default function ProfileSchedulePage() {
    useAuthCheck()

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
                    <Scheduler
                        view="month"
                        events={[
                            {
                                event_id: 1,
                                title: "Event 1",
                                start: new Date("2021/5/2 09:30"),
                                end: new Date("2021/5/2 10:30"),
                            },
                            {
                                event_id: 2,
                                title: "Event 2",
                                start: new Date("2021/5/4 10:00"),
                                end: new Date("2021/5/4 11:00"),
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}


