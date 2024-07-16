import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
        const token = await getToken({ req });

        const isAuth = !!token;
        console.log("token", token);
        //ログイン・新規登録ページかどうか
        const isAuthPage =
            req.nextUrl.pathname.startsWith("/login") ||
            req.nextUrl.pathname.startsWith("/register");

        //ログイン・新規登録ページかどうか検証
        if (isAuthPage) {
            //tokenが存在する場合リダイレクトする
            if (isAuth) {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }
            return null;
        }
        if (!isAuth) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    },
    {
        callbacks: {
            async authorized() {
                return true;
            },
        },
    },
);
export const config = {
    matcher: ["/dashboard/:path", "/login", "/register"],
};
