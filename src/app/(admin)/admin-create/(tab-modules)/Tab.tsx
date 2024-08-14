"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import TabQuizForm from "./(tab-content)/TabQuizForm";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    adminTodayQuizScheme,
    adminTodayQuizSchemeType,
} from "@/app/validations/AdminTodayQuiz";
import { EditorJSForm } from "@/components/Editor";

export default function Tab() {
    const [viewContent, setViewContent] = useState<string | null>(
        "today-quiz-form",
    );
    const handleClickTabMenu = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        setViewContent(e.currentTarget.id);
    };
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<adminTodayQuizSchemeType>({
        resolver: zodResolver(adminTodayQuizScheme),
        defaultValues: {
            choices: [
                { text: "", isTrue: false },
                { text: "", isTrue: false },
            ],
        },
    });
    const [quizText, setQuizText] = useState("[]");
    return (
        <div className="-ml-5">
            {/* <div className="border-maze-right flex h-[50px] items-center justify-between border-b px-10 py-[10px] pr-20">
                <div className="flex">
                    <button
                        id="quiz-data"
                        className="font-bold opacity-30"
                        onClick={handleClickTabMenu}
                    >
                        クイズのデータ
                    </button>
                    <button
                        id="quiz-form"
                        className="ml-5 font-bold"
                        onClick={handleClickTabMenu}
                    >
                        クイズの作成
                    </button>
                    <button
                        id="quiz-posted"
                        className="ml-5 font-bold opacity-30"
                        onClick={handleClickTabMenu}
                    >
                        投稿済みクイズ
                    </button>
                </div>
                <div className="flex">
                    <p className="maze-font font-bold">ChatGPT</p>
                    <p className="maze-font ml-5">Gemini</p>
                </div>
            </div>
            <div className="border-maze-right flex h-[50px] items-center justify-between border-b px-10 py-[10px] pr-20">
                <div className="flex">
                    <button
                        id="today-quiz-form"
                        className="font-bold"
                        onClick={handleClickTabMenu}
                    >
                        「今日の一問」の作成
                    </button>
                    <button
                        id="normal-quiz-form"
                        className="ml-5 font-bold opacity-30"
                        onClick={handleClickTabMenu}
                    >
                        通常クイズの作成
                    </button>
                </div>
            </div> */}
            {viewContent === "today-quiz-form" && (
                <EditorJSForm
                    control={control}
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    quizText={quizText}
                    setQuizText={setQuizText}
                    reset={reset}
                />
            )}
            {viewContent === "normal-quiz-form" && <p>norml</p>}
        </div>
    );
}
