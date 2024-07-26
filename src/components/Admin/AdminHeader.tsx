import React from "react";

export default function AdminHeader() {
    return (
        <header className="border-maze-right flex h-[50px] w-full items-center justify-between border bg-[#000238] px-5 py-[10px] pr-20 text-white">
            <p className="font-bold">hi,admin</p>
            <p className="maze-font text-2xl">MAZE Admin</p>
        </header>
    );
}
