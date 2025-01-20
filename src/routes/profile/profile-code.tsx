import NavBar from "@/components/nav-bar";
import ProfileSideBar from "@/routes/profile/components/side-bar";

export default function ProfileCodeEditor() {
    return (
        <div className="relative bg-cover bg-[url('/src/assets/pxfuel.jpg')]
            bg-center backdrop-blur-sm h-screen">

            <NavBar />
            <div className="flex flex-1">
                <ProfileSideBar />

                <div className="flex-1 p-6">
                </div>
            </div>
        </div>
    );
}
