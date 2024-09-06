"use client";
import React from "react";

export default function page() {
    const getPost = async () => {
        const res = await fetch("http://localhost:3000/admin-today-quiz").then(
            (data) => data.json(),
        );
        console.log(res);
    };

    return (
        <div className="text-4xl">
            hello<button onClick={getPost}>click me</button>
        </div>
    );
}
