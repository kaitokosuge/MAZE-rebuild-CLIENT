import React from "react";

export default function Header() {
    return (
        <header className="border-maze-right flex h-[63px] w-full items-center justify-between border px-5 py-[10px]">
            <p className="font-bold">home</p>
            <form>
                <input
                    type="text"
                    placeholder="クイズを検索する"
                    className="border-maze-right w-[500px] rounded-md border bg-[#F8F8F8] px-5 py-[10px]"
                />
            </form>
        </header>
    );
}
