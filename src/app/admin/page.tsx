"use client";
import TodayQuizPost from "@/features/todayQuizPost/TodayQuizPost";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function page() {
    return (
        <SessionProvider>
            <div className="w-full bg-gray-100">
                <TodayQuizPost />
            </div>
        </SessionProvider>
    );
}
