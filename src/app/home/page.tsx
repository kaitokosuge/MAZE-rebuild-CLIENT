import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export default function page() {
    return (
        <main className="maze-subfont">
            <div className="flex">
                <Sidebar />
                <Header />
            </div>
        </main>
    );
}
