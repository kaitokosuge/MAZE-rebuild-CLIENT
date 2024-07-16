"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function UserAuthForm() {
    const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
    return (
        <div>
            <form>
                {/* <label htmlFor="email">email</label>
                <input id="email" type="email" />
                <button>login</button> */}
            </form>
            {isGoogleLoading ? <>loading</> : <>github</>}
            <button
                onClick={() => {
                    setIsGoogleLoading(true);
                    signIn("google");
                }}
            >
                google login
            </button>
            {isGitHubLoading ? <>loading</> : <>github</>}
            <button
                onClick={() => {
                    setIsGitHubLoading(true);
                    signIn("github");
                }}
            >
                github login
            </button>
        </div>
    );
}
