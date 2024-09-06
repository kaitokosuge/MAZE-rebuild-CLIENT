import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { todayQuizScheme, todayQuizSchemeType } from "../validations/todayQuiz";
export const useReactHookForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<todayQuizSchemeType>({
        resolver: zodResolver(todayQuizScheme),
        defaultValues: {
            choices: [
                { text: "", isTrue: false },
                { text: "", isTrue: false },
            ],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "choices",
    });
    return {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
        fields,
        append,
        remove,
    };
};
