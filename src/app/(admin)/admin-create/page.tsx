"use client";
import React, { ReactNode } from "react";
import Suchedule from "./Suchedule";
import Tab from "./(tab-modules)/Tab";
import { SessionProvider } from "next-auth/react";

export default function Page({ children }: { children: ReactNode }) {
    return (
        <main className="">
            <SessionProvider>
                {children}
                <Suchedule />
                <Tab />
            </SessionProvider>
        </main>
    );
}
