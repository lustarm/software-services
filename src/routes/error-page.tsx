import { useRouteError } from "react-router-dom";
import NavBar from "../components/nav-bar";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const isError = (error: unknown): error is { message: string; statusText: string } => {
        return typeof error === 'object' && error !== null && ('message' in error || 'statusText' in error);
    };

    return (
        <div className="relative h-screen bg-black bg-opacity-60
            flex flex-col items-center justify-center text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10 -z-10"
                style={{ backgroundImage: `url(/src/assets/pxfuel.jpg)` }}
            ></div>

            <NavBar />

            {/* this looks crazy i cant lie */}
            <div className="text-3xl flex flex-col items-center justify-center text-white">
            <h1>Oops!</h1>
                {error ? (
                    <p>Sorry, an unexpected error has occurred.</p>
                ) : (
                        <p>The path you are looking for is invalid.</p>
                    )}
                <p>
                    {isError(error) && <i>{error.statusText || error.message}</i>}
                </p>
            </div>
        </div>
    );
}
