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
        <div>
            <div id="editor" className="mt-10 w-[100%]"></div>
        </div>
    );
}
