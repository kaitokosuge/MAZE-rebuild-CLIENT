"use client";
import React, { useState } from "react";
import TabQuizForm from "../(tab-content)/TabQuizForm";

export default function Tab() {
    const [viewContent, setViewContent] = useState<string | null>(null);
    const handleClickTabMenu = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        setViewContent(e.currentTarget.id);
        console.log(e.currentTarget.id);
    };
    const [form, setForm] = useState("");
    return (
        <div>
            <div className="border-maze-right flex h-[63px] items-center justify-between border-b border-t px-5 py-[10px] pr-20">
                <div className="flex">
                    <button
                        id="quiz-data"
                        className="font-bold"
                        onClick={handleClickTabMenu}
                    >
                        QuizData
                    </button>
                    <button
                        id="quiz-form"
                        className="ml-5 font-bold"
                        onClick={handleClickTabMenu}
                    >
                        QuizForm
                    </button>
                    <button
                        id="quiz-posted"
                        className="ml-5 font-bold"
                        onClick={handleClickTabMenu}
                    >
                        QuizPosted
                    </button>
                </div>
                <div className="flex">
                    <p className="maze-font font-bold">ChatGPT</p>
                    <p className="maze-font ml-5">Gemini</p>
                </div>
            </div>
            {viewContent === "quiz-form" && (
                <TabQuizForm setForm={setForm} form={form} />
            )}
        </div>
    );
}
