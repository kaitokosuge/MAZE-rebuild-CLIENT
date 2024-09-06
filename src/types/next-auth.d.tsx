import { DefaultSession, User } from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
    interface JWT {
        id: UserId;
        accessToken?: string;
        role: number;
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: UserId;
            accessToken?: string;
            role: number;
        } & DefaultSession["user"];
    }
}

declare module "next-auth" {
    interface User {
        role: number;
        accessToken?: string;
    }
}
