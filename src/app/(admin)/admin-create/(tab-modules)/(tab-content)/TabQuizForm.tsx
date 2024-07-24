import React from "react";

export default function TabQuizForm({
    form,
    setForm,
}: {
    form: string;
    setForm: (value: string) => void;
}) {
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(e.target.value);
    };
    return (
        <div>
            <input onChange={handleFormChange} value={form} />
        </div>
    );
}
