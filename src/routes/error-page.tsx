import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const isError = (error: unknown): error is { message: string; statusText: string } => {
        return typeof error === 'object' && error !== null && ('message' in error || 'statusText' in error);
    };

    return (
        <div className="min-h-screen bg-zinc-900 font-outfit text-3xl flex flex-col items-center justify-center text-white">
            {/* this looks crazy i cant lie */}
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
    );
}