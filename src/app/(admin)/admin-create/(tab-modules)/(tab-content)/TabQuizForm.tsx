import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";

export default function TabQuizForm({
    form,
    setForm,
}: {
    form: string;
    setForm: (value: string) => void;
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
            onChange: () => handleForm(editor),
            data: JSON.parse(form),
        });
        return editor;
    };
    const handleForm = (editor: any) => {
        editor.save().then((outputData: EditorJS) => {
            const strData = JSON.stringify(outputData);
            setForm(strData);
        });
    };

    useEffect(() => {
        initializeEditer();
    }, []);
    return (
        <div className="w-[100%] bg-[#f8f8f8] pb-20 pt-5">
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
                        <div className="ml-5 rounded-md bg-blue-300 px-5 py-[5px] text-xs text-white">
                            初級
                        </div>
                        <div className="ml-5 rounded-md bg-blue-300 px-5 py-[5px] text-xs text-white">
                            中級
                        </div>
                        <div className="ml-5 rounded-md bg-blue-300 px-5 py-[5px] text-xs text-white">
                            上級
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex">
                    <p className="min-w-[180px]">クイズの技術カテゴリ</p>
                    <div className="flex overflow-x-scroll">
                        <div className="ml-5 flex items-center whitespace-nowrap rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] duration-300 hover:bg-gray-100">
                            <img
                                src="./tech-icons/typescript.svg"
                                className="w-[20px]"
                            />
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                TypeScript
                            </p>
                        </div>
                        <div className="ml-5 flex items-center whitespace-nowrap rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] duration-300 hover:bg-gray-100">
                            <img
                                src="./tech-icons/typescript.svg"
                                className="w-[20px]"
                            />
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                TypeScript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex">
                    <p className="min-w-[180px]">クイズのその他のカテゴリ</p>
                    <div className="flex overflow-x-scroll">
                        <div className="ml-5 flex items-center whitespace-nowrap rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] duration-300 hover:bg-gray-100">
                            <p className="text-maze-right text-[14px] font-bold">
                                if文
                            </p>
                        </div>
                        <div className="ml-5 flex items-center whitespace-nowrap rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] duration-300 hover:bg-gray-100">
                            <p className="text-maze-right text-[14px] font-bold">
                                for文
                            </p>
                        </div>
                        <div className="ml-5 flex items-center whitespace-nowrap rounded-[5px] border bg-[#ffffff] px-[15px] py-[5px] duration-300 hover:bg-gray-100">
                            <p className="text-maze-right text-[14px] font-bold">
                                オブジェクト指向
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="editor" className="mt-10"></div>
            <div className="m-auto mt-5 max-w-[800px]">
                <p>選択肢</p>
            </div>
        </div>
    );
}
