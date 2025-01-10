import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("Authorization");

        if (!token) {
            navigate("/login/");
        }
    }, [navigate]);

    return true
};

export default useAuthCheck;

