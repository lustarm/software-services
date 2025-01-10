import { useState, useEffect } from "react";
import { useRouteError } from "react-router-dom";

import NavBar from "../components/nav-bar";

export default function ErrorPage() {
    const error = useRouteError();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (error) {
            // Narrow the type of error
            if (typeof error === "object" && error !== null && "data" in error) {
                setErrorMessage((error as { data: string }).data);
            } else {
                setErrorMessage("An unexpected error occurred.");
            }
        }
    }, [error]);

    return (
        <div className="relative bg-cover bg-[url('/src/assets/pxfuel.jpg')]
            bg-center text-white h-screen flex flex-col items-center
            justify-center">

            <NavBar />

            <div className="text-3xl flex flex-col items-center justify-center text-white">
            <h1>Oops!</h1>
                <p>Sorry, an error has occurred.</p>
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}
