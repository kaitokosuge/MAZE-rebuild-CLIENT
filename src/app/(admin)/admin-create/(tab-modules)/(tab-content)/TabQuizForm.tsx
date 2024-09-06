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

import { validateQuizText } from "@/app/validations/CommonQuizText";
import {
    dummyDate,
    dummyOtherCetegory,
    dummyTechCategory,
} from "@/dummy/category";
import { todayQuizSchemeType } from "@/features/todayQuizPost/validations/todayQuiz";

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
    console.log(errors);

    const onSubmitFunc = async (quizData: todayQuizSchemeType) => {
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
            "http://localhost:3001/admin-today-quiz",
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
            className="w-[100%] bg-[#f8f8f8] pb-60 pt-10"
        >
            <div className="relative m-auto flex max-w-[1000px] items-center justify-between border-b border-gray-200 p-5">
                <p className="text-xl font-bold">今日のクイズを作成</p>
                <div className="flex">
                    <button
                        type="submit"
                        className="block w-fit rounded-md bg-[#003f88] px-5 py-[5px] font-bold text-white"
                    >
                        プレビュー
                    </button>
                    <button
                        type="submit"
                        className="ml-5 block w-fit rounded-md bg-[#370035] px-5 py-[5px] font-bold text-white"
                    >
                        下書き保存
                    </button>
                    <button
                        type="submit"
                        className="ml-5 block w-fit rounded-md bg-[#000238] px-5 py-[5px] font-bold text-white"
                    >
                        公開する
                    </button>
                </div>
            </div>

            <div className="m-auto max-w-[1000px] rounded-md border-b border-gray-200 p-5">
                <div className="flex">
                    <p className="min-w-[170px]">予約日</p>
                    <div className="-ml-5 grid grid-cols-5 gap-[10px] overflow-x-scroll">
                        {dummyDate.map((date: string, index: number) => (
                            <div
                                key={index}
                                className="ml-5 flex border border-[#000238] px-[10px] py-[5px] text-xs text-[#000238]"
                            >
                                <input
                                    type="radio"
                                    id={date}
                                    value={date}
                                    {...register("showDay")}
                                    className=""
                                />
                                <label htmlFor={date} className="ml-1">
                                    {date}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-red-300">{errors.showDay?.message}</p>
                <div className="mt-5 flex">
                    <p className="min-w-[170px]">難易度</p>
                    <div className="-ml-5 flex">
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
                    <p className="min-w-[170px]">技術カテゴリ</p>
                    <div className="grid grid-cols-5 gap-[10px] overflow-x-scroll">
                        {dummyTechCategory.map(
                            (techCategory: { id: number; name: string }) => (
                                <label
                                    key={techCategory.id}
                                    htmlFor={techCategory.name}
                                    className="min-w-[130px] rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] text-[11px] duration-300 hover:bg-gray-100"
                                >
                                    <label
                                        htmlFor={techCategory.name}
                                        className="flex w-fit items-center whitespace-nowrap"
                                    >
                                        <input
                                            id={techCategory.name}
                                            type="checkbox"
                                            value={techCategory.id}
                                            {...register("techCategory")}
                                        />

                                        <p className="text-maze-right ml-[10px] font-bold">
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
                    <p className="min-w-[170px]">その他のカテゴリ</p>
                    <div className="grid grid-cols-5 gap-[10px] overflow-x-scroll">
                        {dummyOtherCetegory.map(
                            (otherCategory: { id: number; name: string }) => (
                                <label
                                    key={otherCategory.id}
                                    htmlFor={otherCategory.name}
                                    className="min-w-[130px] items-center whitespace-nowrap rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] text-[11px] duration-300 hover:bg-gray-100"
                                >
                                    <div className="flex w-fit items-center whitespace-nowrap">
                                        <input
                                            id={otherCategory.name}
                                            type="checkbox"
                                            value={otherCategory.id}
                                            {...register("otherCategory")}
                                        />
                                        <p className="text-maze-right ml-[10px] font-bold">
                                            {otherCategory.name}
                                        </p>
                                    </div>
                                </label>
                            ),
                        )}
                    </div>
                </div>
            </div>
            <div id="editor" className="mt-10 pb-10"></div>
            <div className="m-auto max-w-[800px]">
                <div className="flex items-center justify-between">
                    <p>選択肢</p>
                    {fields.length < 6 && (
                        <button
                            type="button"
                            onClick={() => append({ text: "", isTrue: false })}
                            className="block w-fit rounded-md bg-[#000238] px-5 py-[5px] font-bold text-white"
                        >
                            選択肢を追加
                        </button>
                    )}
                </div>

                <p className="text-red-300">{errors.choices?.root?.message}</p>
                <p className="text-red-300">{errors.choices?.message}</p>
                <div className="grid grid-cols-2 gap-5">
                    {fields.map(
                        (
                            field: {
                                id: string;
                                text: string;
                                isTrue: boolean;
                            },
                            index: number,
                        ) => (
                            <div key={field.id} className="w-full">
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
                                                className="block w-full rounded-md border border-gray-400 px-5 py-[10px]"
                                            />
                                        )}
                                    />
                                    {errors.choices?.[index]?.text && (
                                        <p className="text-red-300">
                                            {errors.choices[index].text.message}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <div>
                                        <Controller
                                            name={`choices.${index}.isTrue`}
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    id={`true-${index}`}
                                                    type="radio"
                                                    value="true"
                                                    checked={
                                                        field.value === true
                                                    }
                                                    onChange={() =>
                                                        field.onChange(true)
                                                    }
                                                />
                                            )}
                                        />
                                        <label
                                            className="ml-1"
                                            htmlFor={`true-${index}`}
                                        >
                                            正解
                                        </label>

                                        <Controller
                                            name={`choices.${index}.isTrue`}
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    id={`false-${index}`}
                                                    type="radio"
                                                    value="false"
                                                    checked={
                                                        field.value === false
                                                    }
                                                    onChange={() =>
                                                        field.onChange(false)
                                                    }
                                                    className="ml-5"
                                                />
                                            )}
                                        />
                                        <label
                                            className="ml-1"
                                            htmlFor={`false-${index}`}
                                        >
                                            不正解
                                        </label>
                                    </div>

                                    {fields.length > 2 && (
                                        <button
                                            className="text-xs text-blue-300"
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
                </div>
            </div>
        </form>
    );
}
