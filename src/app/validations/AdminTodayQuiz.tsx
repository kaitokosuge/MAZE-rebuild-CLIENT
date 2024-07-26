import { z } from "zod";

export const AdminTodayQuizScheme = z.object({
    // choices: z.array(z.object({ choiceText: z.string(), isTrue: z.boolean() })),
    // showDay: z.string(),
    techCategory: z.array(z.string()),
    otherCategory: z.array(z.string()).optional(),
    // userId: z.number(),
    level: z.string({ message: "!レベルは必須項目です" }),
});

export type adminTodayQuizSchemeType = z.infer<typeof AdminTodayQuizScheme>;
