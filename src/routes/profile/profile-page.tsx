import NavBar from "@/components/nav-bar";
import ProfileSideBar from "@/routes/profile/components/side-bar";
import { useEffect, useState } from "react";

// Test query client
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient()

interface lesson {
    id: Number
    name: string
    complete: boolean
    description: string
}

export default function ProfilePage() {
    return (
        <QueryClientProvider client={queryClient}>
            <ProfilePageQuery />
        </QueryClientProvider>
    )
}

function ProfilePageQuery() {
    const navigate = useNavigate()

    const [lessons, setLessons] = useState([
        { id: 1, complete: false, name: 'Lesson 1', description: "hello world" },
        { id: 2, complete: true, name: 'Lesson 2', description: "less 2 hello world" },
    ])

    const toggleLessonComplete = (id: Number) => {
        setLessons((prevLessons) =>
            prevLessons.map((lesson) =>
                lesson.id === id ? { ...lesson, complete: !lesson.complete } : lesson
            )
        );
    };

    function deleteLesson(lesson: lesson) {
        setLessons(lessons.filter(e => e !== lesson))
    }

    const sid = localStorage.getItem("Authorization")

    useEffect(() => {
        if (!sid) navigate("/login")
    }, [])

    const { isPending, error, data } = useQuery({
        queryKey: ['data'],
        queryFn: () =>
            fetch('http://localhost:8000/v1/getUserData', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionID: sid }),
            }).then((res) => res.json(),),
    })


    if (isPending)
        return
    if (error)
        return (<h1>error : {error.message}</h1>)
    if (data.error)
        return

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
                            {data.data &&
                                <div className="font-bold text-lg">
                                    {data.data.username}</div>
                            }
                            {data.data &&
                                <div className="text-sm text-zinc-400">
                                    Role: {data.data.role}</div>
                            }
                        </div>
                    </div>

                    {/* Main Content Panels */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-zinc-800 p-5 rounded-md h-40 overflow-auto">
                            <h1 className="font-semibold text-2xl">Lessons</h1>
                            {
                                lessons.map((lesson) =>
                                    <div key={lesson.id} className="flex flex-row py-2 space-x-1">
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

