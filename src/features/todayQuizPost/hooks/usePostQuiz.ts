import { validateQuizText } from "@/app/validations/CommonQuizText";
import { todayQuizSchemeType } from "../validations/todayQuiz";
import EditorJS from "@editorjs/editorjs";
import axios from "axios";
import { UseFormReset } from "react-hook-form";

export const usePostQuiz = (
    quizText: string,
    setQuizText: (value: React.SetStateAction<string>) => void,
    reset: UseFormReset<{
        choices: {
            text: string;
            isTrue: boolean;
        }[];
        showDay: string;
        techCategory: string[];
        level: string;
        otherCategory?: string[] | undefined;
    }>,
) => {
    const postQuizFunc = async (quizData: todayQuizSchemeType) => {
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
        console.log("response", res);
        if (res.status === 201) {
            setQuizText("[]");
            reset();
        }
    };
    return { postQuizFunc };
};
