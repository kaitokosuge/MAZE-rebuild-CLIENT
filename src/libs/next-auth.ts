import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import { db } from "./db";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        // Google:({})
    ],
    adapter: PrismaAdapter(db),
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }
            return session;
        },
    },
};
