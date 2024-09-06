import { useCallback, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";

export const useEditor = () => {
    const [quizText, setQuizText] = useState("[]");
    const handleQuizText = (editor: any) => {
        editor.save().then((outputData: EditorJS) => {
            const strData = JSON.stringify(outputData);
            setQuizText(strData);
        });
    };
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
    const ref = useRef<EditorJS>();

    const [isMounted, setIsMounted] = useState<boolean>(false);
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
    return { quizText, setQuizText };
};
