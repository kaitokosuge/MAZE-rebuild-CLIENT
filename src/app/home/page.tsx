import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function page() {
    return (
        <div>
            <div className="min-h-screen w-full bg-top px-20 py-20">
                <section className="maze-subfont relative rounded-xl border border-[#3a3a3a] bg-[#1a1a1a] px-10 py-10 font-bold text-white">
                    <div className="bg-maze-btn-right-white absolute right-[2%] top-[-1px] h-[1px] w-[50%]"></div>

                    <h2 className="border-b border-[#292b3a] pb-1 text-xl">
                        07/18 Today's Question
                    </h2>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>Hover</TooltipTrigger>
                            <TooltipContent>
                                <p>Add to library</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <div className="mt-5 flex justify-between rounded-md bg-[#252525] p-1">
                        <div className="category relative flex w-[50%] overflow-scroll">
                            <div className="relative flex min-w-[120px] items-center rounded-md border border-[#293049] bg-[#11111e] px-5 py-[6px] text-center text-[11px]">
                                <div className="bg-maze-btn-right absolute right-[10px] top-[-1px] h-[1px] w-[50%]"></div>
                                <img
                                    src="./tech-icons/typescript.svg"
                                    className="w-[20px]"
                                />
                                <p className="ml-1">TypeScript</p>
                                <div className="bg-maze-btn-right absolute bottom-[-1px] left-[10px] h-[1px] w-[50%]"></div>
                            </div>
                            <div className="relative ml-1 flex min-w-[120px] items-center rounded-md border border-[#293049] bg-[#11111e] px-5 py-[6px] text-center text-[11px]">
                                <div className="bg-maze-btn-right absolute right-[10px] top-[-1px] h-[1px] w-[50%]"></div>
                                <img
                                    src="./tech-icons/react.svg"
                                    className="w-[20px]"
                                />
                                <p className="ml-1">React</p>
                                <div className="bg-maze-btn-right absolute bottom-[-1px] left-[10px] h-[1px] w-[50%]"></div>
                            </div>
                            <div className="relative ml-1 min-w-[120px] rounded-md border border-[#293049] bg-[#11111e] px-5 py-[6px] text-center text-[11px]">
                                <div className="bg-maze-btn-right absolute right-[10px] top-[-1px] h-[1px] w-[50%]"></div>
                                if文
                                <div className="bg-maze-btn-right absolute bottom-[-1px] left-[10px] h-[1px] w-[50%]"></div>
                            </div>
                        </div>
                        <div className="date flex">
                            <div className="text-shadow-correct relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                <img
                                    src="./app-icons/check.svg"
                                    className="w-[20px]"
                                />
                                <p className="ml-1 text-emerald-300">
                                    2024-07-18
                                </p>
                            </div>
                            <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                <img
                                    src="./app-icons/pen.svg"
                                    className="w-[15px]"
                                />
                                <p className="ml-1 text-gray-400">2024-07-18</p>
                            </div>
                            <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                <img
                                    src="./app-icons/fix.svg"
                                    className="w-[15px]"
                                />
                                <p className="ml-1 text-white">2024-07-18</p>
                            </div>
                            <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                <img
                                    src="./app-icons/good.svg"
                                    className="w-[20px]"
                                />
                            </div>
                            <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                <img
                                    src="./app-icons/note.svg"
                                    className="w-[20px]"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="m-auto mt-10 w-[100%]">
                        **変数$aが変数$bより大きい時に「aはbより大きい」と出力したい。**
                        以下、クイズ本文とソースコードの部分も含めてリッチテキストエディターのlongtextで持ちたい（検索機能の最適化のため）
                        **下記のソースコードは正しいか**
                    </p>
                    {/* <pre className="m-auto mt-10 w-[100%] rounded-md bg-black p-10">
                console.log(helloworld)
            </pre> */}
                    <div className="m-auto mt-10 grid w-[90%] grid-cols-3 gap-5">
                        <button className="rounded-md border border-[#3a3a3a] bg-[#373737] py-[15px]">
                            正しい
                        </button>
                        <button className="rounded-md border border-[#3a3a3a] py-[15px]">
                            正しくない
                        </button>
                    </div>
                    <button className="m-auto mt-20 block w-[200px] rounded-md border border-gray-500 py-[15px]">
                        answer!
                    </button>
                </section>
                <section className="maze-subfont mt-10 rounded-xl border border-[#3a3a3a] bg-[#1a1a1a] px-10 py-10 font-bold text-white">
                    <h2 className="border-b border-[#292b3a] pb-1 text-xl">
                        All Today's Question
                    </h2>
                    <div className="">
                        <div className="mt-5 flex justify-between rounded-md bg-[#252525] p-1">
                            <div className="category relative flex w-[50%] overflow-scroll">
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[20px]">
                                    <p className="ml-1 font-bold text-gray-100">
                                        07-18
                                    </p>
                                </div>
                                <div className="relative flex min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./tech-icons/typescript.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1">TypeScript</p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./tech-icons/react.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1">React</p>
                                </div>
                                <div className="relative ml-1 flex w-fit min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <p className="m-auto w-fit">if文</p>
                                </div>
                            </div>
                            <div className="date flex">
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/pen.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-gray-400">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/fix.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-white">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/good.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/note.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between rounded-md bg-[#252525] p-1">
                            <div className="category relative flex w-[50%] overflow-scroll">
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[20px]">
                                    <p className="ml-1 font-bold text-gray-100">
                                        07-17
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./tech-icons/laravel.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1">Laravel</p>
                                </div>
                                <div className="relative ml-1 flex w-fit min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <p className="m-auto w-fit">if文</p>
                                </div>
                            </div>
                            <div className="date flex">
                                <div className="text-shadow-correct relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/check.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1 text-emerald-300">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/pen.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-gray-400">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/fix.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-white">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/good.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/note.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between rounded-md bg-[#252525] p-1">
                            <div className="category relative flex w-[50%] overflow-scroll">
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[20px]">
                                    <p className="ml-1 font-bold text-gray-100">
                                        07-16
                                    </p>
                                </div>
                                <div className="relative flex min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./tech-icons/python.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1">Python</p>
                                </div>
                                <div className="relative ml-1 flex w-fit min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <p className="m-auto w-fit">if文</p>
                                </div>
                            </div>
                            <div className="date flex">
                                <div className="text-shadow-correct relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/check.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1 text-emerald-300">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/pen.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-gray-400">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/fix.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-white">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/good.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/note.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between rounded-md bg-[#252525] p-1">
                            <div className="category relative flex w-[50%] overflow-scroll">
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[20px]">
                                    <p className="ml-1 font-bold text-gray-100">
                                        07-16
                                    </p>
                                </div>
                                <div className="relative flex min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./tech-icons/python.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1">Python</p>
                                </div>
                                <div className="relative ml-1 flex w-fit min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <p className="m-auto w-fit">if文</p>
                                </div>
                            </div>
                            <div className="date flex">
                                <div className="text-shadow-correct relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/check.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1 text-emerald-300">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/pen.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-gray-400">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/fix.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-white">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/good.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/note.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-between rounded-md bg-[#252525] p-1">
                            <div className="category relative flex w-[50%] overflow-scroll">
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[20px]">
                                    <p className="ml-1 font-bold text-gray-100">
                                        07-16
                                    </p>
                                </div>
                                <div className="relative flex min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./tech-icons/python.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1">Python</p>
                                </div>
                                <div className="relative ml-1 flex w-fit min-w-[120px] items-center rounded-md border border-[#3b3b3b] bg-[#232323] px-5 py-[6px] text-center text-[11px]">
                                    <p className="m-auto w-fit">if文</p>
                                </div>
                            </div>
                            <div className="date flex">
                                <div className="text-shadow-correct relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/check.svg"
                                        className="w-[20px]"
                                    />
                                    <p className="ml-1 text-emerald-300">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/pen.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-gray-400">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 flex min-w-[120px] items-center rounded-md px-5 py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/fix.svg"
                                        className="w-[15px]"
                                    />
                                    <p className="ml-1 text-white">
                                        2024-07-18
                                    </p>
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/good.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                                <div className="relative ml-1 min-w-[30px] rounded-md border border-[#2b2b2b] bg-[#2f1609] px-[10px] py-[6px] text-center text-[11px]">
                                    <img
                                        src="./app-icons/note.svg"
                                        className="w-[20px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="m-auto mt-10 block rounded-md border border-blue-950 bg-[#11137f3d] px-5 py-[10px]">
                        全て見る→
                    </button>
                </section>
            </div>
            <div className="w-full bg-[#171717]">heoo</div>
        </div>
    );
}
