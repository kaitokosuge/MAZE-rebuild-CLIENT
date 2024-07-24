"use client";
import React from "react";

export default function Tab() {
    return (
        <div className="border-maze-right flex h-[63px] w-full items-center border-b border-t px-5 py-[10px]">
            <p className="font-bold">QuizData</p>
            <p className="ml-5 font-bold">QuizForm</p>
            <p className="ml-5 font-bold">QuizPosted</p>
        </div>
    );
}
