export const validateQuizText = (quizText: string) => {
    if (quizText === "[]" || quizText === undefined) {
        return "入力してください";
    } else if (quizText.length > 30000) {
        console.log("length", quizText.length);
        return "文字数が超過しています";
    }
    return false;
};
