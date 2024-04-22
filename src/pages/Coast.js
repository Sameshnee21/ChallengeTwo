import React from "react";
import { useNavigate } from "react-router-dom";
 
const Coast = () => {
    const navigate = useNavigate();
 
    return (
        <>
            <h1 style={{ color: "green" }}>
                GeeksForGeeks
            </h1>
            <button onClick={() => navigate("/")}>
                Back
            </button>
        </>
    );
};
 
export default Coast;