import { z } from "zod";

const choiceScheme = z.object({
    text: z.string().min(1, "選択肢のテキストは入力必須です"),
    isTrue: z.boolean(),
});

export const adminTodayQuizScheme = z.object({
    choices: z
        .array(choiceScheme)
        .min(2, "選択肢は少なくとも2つ用意してください。")
        .max(6, "選択肢は最大6つまでです。")
        .refine((choices) => choices.some((choice) => choice.isTrue), {
            message: "選択肢内に「正解」のものを一つ以上は用意してください",
        }),
    showDay: z.string({ message: "入力必須項目です" }),
    techCategory: z.array(z.string(), { message: "入力必須項目です" }),
    otherCategory: z.array(z.string()).optional(),

    level: z.string({ message: "入力必須項目です" }),
});

export type adminTodayQuizSchemeType = z.infer<typeof adminTodayQuizScheme>;
