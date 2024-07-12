import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    interface test {
        test: string;
    }
    return (
        <>
            <Sidebar />
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            ></main>
        </>
    );
}
