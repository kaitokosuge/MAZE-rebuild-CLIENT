"use client";
import React, { ReactNode } from "react";
import Suchedule from "./Suchedule";
import Tab from "./(tab-modules)/Tab";
import { SessionProvider } from "next-auth/react";

export default function Page() {
    return (
        <main className="">
            <SessionProvider>
                <Suchedule />
                <Tab />
            </SessionProvider>
        </main>
    );
}
