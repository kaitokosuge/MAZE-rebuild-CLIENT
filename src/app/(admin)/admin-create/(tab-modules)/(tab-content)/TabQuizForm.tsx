import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";
import {
    FieldErrors,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form";
import { adminTodayQuizSchemeType } from "@/app/validations/AdminTodayQuiz";
import { validateQuizText } from "@/app/validations/CommonQuizText";
import { dummyOtherCetegory, dummyTechCategory } from "@/dummy/category";

export default function TabQuizForm({
    register,
    handleSubmit,
    errors,
    quizText,
    setQuizText,
}: {
    register: UseFormRegister<{
        // text: string;
        // choices: {
        //     choiceText: string;
        //     isTrue: boolean;
        // }[];
        // showDay: string;
        techCategory: string[];
        // userId: number;
        level: string;
        otherCategory?: string[] | undefined;
    }>;
    handleSubmit: UseFormHandleSubmit<
        {
            // text: string;
            // choices: {
            //     choiceText: string;
            //     isTrue: boolean;
            // }[];
            // showDay: string;
            techCategory: string[];
            // userId: number;
            level: string;
            otherCategory?: string[] | undefined;
        },
        undefined
    >;
    errors: FieldErrors<{
        level: string;
    }>;
    quizText: string;
    setQuizText: (value: string) => void;
}) {
    const initializeEditer = async () => {
        const editor: EditorJS = new EditorJS({
            holder: "editor",
            placeholder: "クイズ本文",
            inlineToolbar: true,
            tools: {
                header: Header,
                code: CodeTool,
            },
            onChange: () => handleQuizText(editor),
            data: JSON.parse(quizText),
        });
    };

    const handleQuizText = (editor: any) => {
        editor.save().then((outputData: EditorJS) => {
            const strData = JSON.stringify(outputData);
            setQuizText(strData);
        });
    };

    useEffect(() => {
        initializeEditer();
    }, []);

    const onSubmit = async (quizData: adminTodayQuizSchemeType) => {
        console.log(quizData);
        const quizObj: EditorJS = JSON.parse(quizText);
        const saveQuizBlock = JSON.stringify(quizObj.blocks);

        const validateMessage = validateQuizText(saveQuizBlock);
        if (validateMessage === "入力してください") {
            alert("入力してください");
        } else if (validateMessage === "文字数が超過しています") {
            alert("文字数が超過しています");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[100%] bg-[#f8f8f8] pb-20 pt-5"
        >
            <div className="relative m-auto max-w-[1000px] border-b border-gray-200 p-5">
                <button
                    type="submit"
                    className="block w-fit rounded-md bg-[#000238] px-5 py-[5px] font-bold text-white"
                >
                    保存する
                </button>
            </div>

            <div className="m-auto max-w-[1000px] rounded-md border-b border-gray-200 p-5">
                <div className="flex">
                    <p className="min-w-[180px]">クイズの予約日</p>
                    <div className="flex">
                        <div className="ml-5 border border-[#000238] px-5 py-[5px] text-xs text-[#000238]">
                            7/21
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/22
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/23
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs text-[#000238]">
                            7/21
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/22
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/23
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/22
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/23
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/22
                        </div>
                        <div className="border border-[#000238] px-5 py-[5px] text-xs">
                            7/23
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex">
                    <p className="min-w-[180px]">クイズのレベル</p>
                    <div className="flex">
                        <input
                            type="radio"
                            id="初級"
                            value="1"
                            {...register("level")}
                            className="ml-5"
                        />
                        <label htmlFor="初級">初級</label>
                        <input
                            type="radio"
                            id="中級"
                            value="2"
                            {...register("level")}
                            className="ml-5"
                        />
                        <label htmlFor="中級">中級</label>
                        <input
                            type="radio"
                            id="上級"
                            value="3"
                            {...register("level")}
                            className="ml-5"
                        />
                        <label htmlFor="上級">上級</label>
                    </div>
                </div>
                <p className="text-red-300">{errors.level?.message}</p>
                <div className="mt-5 flex">
                    <p className="min-w-[180px]">クイズの技術カテゴリ</p>
                    <div className="flex overflow-x-scroll">
                        {dummyTechCategory.map(
                            (techCategory: { id: number; name: string }) => (
                                <label
                                    key={techCategory.id}
                                    htmlFor={techCategory.name}
                                    className="ml-5 min-w-[170px] rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] duration-300 hover:bg-gray-100"
                                >
                                    <label
                                        htmlFor={techCategory.name}
                                        className="m-auto flex w-fit items-center whitespace-nowrap"
                                    >
                                        <input
                                            id={techCategory.name}
                                            type="checkbox"
                                            value={techCategory.id}
                                            {...register("techCategory")}
                                        />

                                        <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                            {techCategory.name}
                                        </p>
                                    </label>
                                </label>
                            ),
                        )}
                    </div>
                </div>
                <div className="mt-5 flex">
                    <p className="min-w-[180px]">クイズのその他のカテゴリ</p>
                    <div className="flex overflow-x-scroll">
                        {dummyOtherCetegory.map(
                            (otherCategory: { id: number; name: string }) => (
                                <label
                                    key={otherCategory.id}
                                    htmlFor={otherCategory.name}
                                    className="ml-5 min-w-[170px] items-center whitespace-nowrap rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] duration-300 hover:bg-gray-100"
                                >
                                    <div className="m-auto flex w-fit items-center whitespace-nowrap">
                                        <input
                                            id={otherCategory.name}
                                            type="checkbox"
                                            value={otherCategory.id}
                                            {...register("otherCategory")}
                                        />
                                        <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                            {otherCategory.name}
                                        </p>
                                    </div>
                                </label>
                            ),
                        )}
                    </div>
                </div>
            </div>
            <div id="editor" className="mt-10"></div>
            <div className="m-auto mt-5 max-w-[800px]">
                <p>選択肢</p>
            </div>
        </form>
    );
}
