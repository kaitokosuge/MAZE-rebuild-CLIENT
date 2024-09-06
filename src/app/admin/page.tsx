"use client";
import dynamic from "next/dynamic";

// ダイナミックインポートの設定
const TodayQuizPost = dynamic(
    () => import("@/features/todayQuizPost/TodayQuizPost"),
    {
        ssr: false, // サーバーサイドレンダリングを無効にする場合（必要に応じて）
    },
);
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
