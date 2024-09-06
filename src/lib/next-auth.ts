import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import { db } from "./db";
import Google from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    adapter: PrismaAdapter(db),
    pages: {
        signIn: "/login",
    },

    callbacks: {
        async jwt({ token, user, account }) {
            if (user && account) {
                token.role = user.role;
                token.accessToken = account.access_token;
            }

            return token;
        },
        async session({ token, session }) {
            if (token) {
                session.user.accessToken = token.accessToken;
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
                session.user.role = token.role;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
};
