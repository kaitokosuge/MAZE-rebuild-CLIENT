"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";

import axios from "axios";

import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";
import {
    Control,
    Controller,
    FieldErrors,
    useFieldArray,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReset,
} from "react-hook-form";
import { adminTodayQuizSchemeType } from "@/app/validations/AdminTodayQuiz";
import { validateQuizText } from "@/app/validations/CommonQuizText";
import {
    dummyDate,
    dummyOtherCetegory,
    dummyTechCategory,
} from "@/dummy/category";
import { useSession } from "next-auth/react";

export default function TabQuizForm({
    control,
    register,
    handleSubmit,
    errors,
    quizText,
    setQuizText,
    reset,
}: {
    control: Control<
        {
            level: string;
            choices: { text: string; isTrue: boolean }[];
            showDay: string;
            techCategory: string[];
            otherCategory?: string[] | undefined;
        },
        any
    >;
    register: UseFormRegister<{
        choices: {
            text: string;
            isTrue: boolean;
        }[];
        showDay: string;
        techCategory: string[];

        level: string;
        otherCategory?: string[] | undefined;
    }>;
    handleSubmit: UseFormHandleSubmit<
        {
            choices: {
                text: string;
                isTrue: boolean;
            }[];
            showDay: string;
            techCategory: string[];

            level: string;
            otherCategory?: string[] | undefined;
        },
        undefined
    >;
    errors: FieldErrors<{
        level: string;
        choices: {
            text: string;
            isTrue: boolean;
        }[];
        showDay: string;
        techCategory: string[];
        otherCategory?: string[] | undefined;
    }>;
    quizText: string;
    setQuizText: (value: string) => void;
    reset: UseFormReset<{
        level: string;
        choices: {
            text: string;
            isTrue: boolean;
        }[];
        showDay: string;
        techCategory: string[];
        otherCategory?: string[] | undefined;
    }>;
}) {
    const { data } = useSession();
    console.log("user name", data?.user.name);

    const ref = useRef<EditorJS>();
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const initializeEditer = useCallback(async () => {
        const editor: EditorJS = new EditorJS({
            holder: "editor",
            onReady() {
                ref.current = editor;
            },
            placeholder: "クイズ本文",
            inlineToolbar: true,
            tools: {
                header: Header,
                code: CodeTool,
            },
            onChange: () => handleQuizText(editor),
            data: JSON.parse(quizText),
        });
    }, []);

    const handleQuizText = (editor: any) => {
        editor.save().then((outputData: EditorJS) => {
            const strData = JSON.stringify(outputData);
            setQuizText(strData);
        });
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMounted(true);
        }
        if (isMounted) {
            initializeEditer();
        }
        return () => {
            ref.current?.destroy();
            ref.current = undefined;
        };
    }, [isMounted, initializeEditer]);

    const { fields, append, remove } = useFieldArray({
        control,
        name: "choices",
    });

    const onSubmitFunc = async (quizData: adminTodayQuizSchemeType) => {
        if (data?.user.name === undefined) {
            console.log("un login");
            return;
        }
        const quizObj: EditorJS = JSON.parse(quizText);
        const saveQuizBlock = JSON.stringify(quizObj.blocks);

        const validateMessage = validateQuizText(saveQuizBlock);
        if (validateMessage) {
            alert(`${validateMessage}`);
            return;
        }
        const sendData = {
            text: saveQuizBlock,
            choices: quizData.choices,
            techCategory: quizData.techCategory,
            showDay: quizData.showDay,
            userId: "clzo51ihe0008gfj2ken2obvj",
            otherCategory: quizData.otherCategory,
            level: quizData.level,
        };
        console.log(sendData);
        const res = await axios.post(
            "http://localhost:3001/admin-today-quiz/post",
            sendData,
        );
        console.log("res", res);
        if (res.status === 201) {
            setQuizText("[]");
            reset();
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmitFunc)}
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
                    <div className="flex overflow-x-scroll">
                        {dummyDate.map((date: string, index: number) => (
                            <div
                                key={index}
                                className="ml-5 border border-[#000238] px-5 py-[5px] text-xs text-[#000238]"
                            >
                                <input
                                    type="radio"
                                    id={date}
                                    value={date}
                                    {...register("showDay")}
                                    className=""
                                />
                                <label htmlFor={date}>{date}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-red-300">{errors.showDay?.message}</p>
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
                <p className="text-red-300">{errors.techCategory?.message}</p>
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
            <div className="m-auto max-w-[800px]">
                <p>選択肢</p>
                <p className="text-red-300">{errors.choices?.root?.message}</p>
                {fields.map(
                    (
                        field: {
                            id: string;
                            text: string;
                            isTrue: boolean;
                        },
                        index: number,
                    ) => (
                        <div key={field.id}>
                            <div>
                                <label className="text-xs text-gray-400">
                                    選択肢テキスト
                                </label>
                                <Controller
                                    name={`choices.${index}.text`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            id={`text${index}`}
                                        />
                                    )}
                                />
                                {errors.choices?.[index]?.text && (
                                    <p className="text-red-300">
                                        {errors.choices[index].text.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor={`true-${index}`}>正解</label>
                                <Controller
                                    name={`choices.${index}.isTrue`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id={`true-${index}`}
                                            type="radio"
                                            value="true"
                                            checked={field.value === true}
                                            onChange={() =>
                                                field.onChange(true)
                                            }
                                        />
                                    )}
                                />
                                <label htmlFor={`false-${index}`}>不正解</label>
                                <Controller
                                    name={`choices.${index}.isTrue`}
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id={`false-${index}`}
                                            type="radio"
                                            value="false"
                                            checked={field.value === false}
                                            onChange={() =>
                                                field.onChange(false)
                                            }
                                        />
                                    )}
                                />
                                {fields.length > 2 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                    >
                                        選択肢を削除
                                    </button>
                                )}
                            </div>
                        </div>
                    ),
                )}
                {fields.length < 6 && (
                    <button
                        type="button"
                        onClick={() => append({ text: "", isTrue: false })}
                    >
                        選択肢を追加
                    </button>
                )}
            </div>
        </form>
    );
}
