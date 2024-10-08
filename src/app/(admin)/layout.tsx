export const metadata = {
    title: "Next.js",
    description: "MAZE クイズ作成画面",
};

import "../../styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="maze-subfont w-full">{children}</div>;
}
