import NavBar from "@/components/nav-bar";
import ProfileSideBar from "@/routes/profile/components/side-bar";
import useAuthCheck from "@/util/check-auth";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    useAuthCheck()

    const [loading, setLoading] = useState(true)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    interface lesson {
        id: Number
        name: string
        complete: boolean
        description: string
    }

    const [lessons, setLessons] = useState([
        { id: 1, complete: false, name: 'Lesson 1', description: "hello world"},
        { id: 2, complete: true, name: 'Lesson 2', description: "less 2 hello world"},
    ])

    useEffect(() => {
        setLoading(false)
        // Get user info
        // Set lesson info
    }, [])

    if(loading) {
        return
    }

    const toggleLessonComplete = (id: Number) => {
        setLessons((prevLessons) =>
            prevLessons.map((lesson) =>
                lesson.id === id ? { ...lesson, complete: !lesson.complete } : lesson
            )
        );
    };

    function deleteLesson (lesson: lesson) {
        setLessons(lessons.filter(e => e !== lesson))
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
                            <div className="font-bold text-lg">{username}</div>
                            <div className="text-sm text-zinc-400">Role: {role}</div>
                        </div>
                    </div>

                    {/* Main Content Panels */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-zinc-800 p-5 rounded-md h-40 overflow-auto">
                            <h1 className="font-semibold text-2xl">Lessons</h1>
                            {
                                lessons.map((lesson) =>
                                    <div className="flex flex-row py-2 space-x-1">
                                        <input id="default-checkbox" type="checkbox" value="" 
                                        checked={lesson.complete}
                                        onChange={() => toggleLessonComplete(lesson.id)}
                                        className=" text-blue-600 bg-gray-100 
                                        border-gray-300 rounded dark:ring-offset-gray-800 
                                        dark:bg-gray-700 dark:border-gray-600"></input>
                                        <a>
                                            {lesson.name}
                                        </a>
                                        <button onClick={() => deleteLesson(lesson)}>
                                            delete
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                        <div className="bg-zinc-800 p-5 rounded-md h-40"></div>
                        <div className="bg-zinc-800 p-5 rounded-md h-40"></div>
                    </div>

                    <div className="mt-5 bg-zinc-800 p-5 rounded-md h-60"></div>
                </div>
            </div>
        </div>
    )
}

