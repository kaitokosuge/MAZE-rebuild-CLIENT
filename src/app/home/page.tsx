import Tip from "@/components/Tip/Tooltip";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <main className="maze-subfont text-maze-right">
            <section>
                <div className="border-maze-color flex items-center border-b bg-[#F8F8F8]">
                    <div className="border-maze-right min-w-[160px] border-r bg-[#F4F4F4] py-[10px]">
                        <p className="m-auto w-fit text-[36px] font-bold">
                            07/21
                        </p>
                        <p className="m-auto w-fit">2024 July</p>
                    </div>
                    <div className="flex w-full items-center justify-between px-5">
                        <div className="flex">
                            <h2 className="text-[24px] font-bold">
                                今日の一問
                            </h2>
                            <Tip
                                tipTitle="「今日の一問」"
                                tipContent="毎朝7時に更新されるクイズです。"
                            />
                        </div>
                        <div className="border-maze-color flex items-center rounded-[5px] border bg-white p-1">
                            <div className="flex">
                                <Link
                                    href="/tech/typescript"
                                    className="flex items-center whitespace-nowrap rounded-[5px] bg-[#f4f4f4] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                                >
                                    <img
                                        src="./tech-icons/typescript.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                        TypeScript
                                    </p>
                                </Link>
                                <Link
                                    href="/tech/typescript"
                                    className="ml-1 flex min-w-[150px] items-center whitespace-nowrap rounded-[5px] bg-[#f4f4f4] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                                >
                                    <p className="m-auto w-fit">初級</p>
                                </Link>
                                <Link
                                    href="/tech/typescript"
                                    className="ml-1 flex min-w-[150px] items-center whitespace-nowrap rounded-[5px] bg-[#f4f4f4] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                                >
                                    <p className="m-auto w-fit">if文</p>
                                </Link>
                            </div>
                            {/* <div>good</div> */}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="border-maze-color min-h-[300px] min-w-[160px] border-r bg-[#F4F4F4]"></div>
                    <div className="bg-[#F8F8F8] pb-10">
                        <p className="ml-[5%] mt-10 w-[70%]">
                            **変数$aが変数$bより大きい時に「aはbより大きい」と出力したい。**
                            以下、クイズ本文とソースコードの部分も含めてリッチテキストエディターのlongtextで持ちたい（検索機能の最適化のため）
                            **下記のソースコードは正しいか**
                        </p>
                        <pre className="ml-[5%] mt-10 w-[70%] rounded-md bg-black p-5 text-white">
                            console.log("hello world")
                        </pre>
                        <div className="ml-[5%] mt-10 grid w-[70%] grid-cols-2 gap-5">
                            <button className="rounded-md border border-[#333333] px-[10px] py-[10px]">
                                正しい
                            </button>
                            <button className="rounded-md border border-[#333333] px-[10px] py-[10px]">
                                正しくない
                            </button>
                        </div>
                        <div className="ml-[5%] mt-10 w-[70%] rounded-md">
                            <button className="m-auto block w-[150px] rounded-md bg-[#0D0766] px-[10px] py-[15px] text-white">
                                回答する
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
