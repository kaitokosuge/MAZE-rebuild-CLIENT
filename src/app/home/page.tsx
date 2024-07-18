import React from "react";

export default function page() {
    return (
        <div className="min-h-screen w-full bg-[#141414] px-40 py-20">
            <section className="maze-subfont rounded-xl bg-[#1a1a1a] px-40 py-10 font-bold text-white">
                <h2 className="border-b border-[#292b3a] pb-1 text-xl">
                    07/18 今日の一問
                </h2>
                <div className="mt-5 flex justify-between rounded-md bg-[#1f1f1f] p-1">
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
                            <p className="ml-1 text-emerald-300">2024-07-18</p>
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
                <p className="m-auto mt-10 w-[90%]">
                    **変数$aが変数$bより大きい時に「aはbより大きい」と出力したい。**
                    以下、クイズ本文とソースコードの部分も含めてリッチテキストエディターのlongtextで持ちたい（検索機能の最適化のため）
                    **下記のソースコードは正しいか**
                </p>
                <pre className="m-auto mt-10 w-[90%] rounded-md bg-black p-10">
                    console.log(helloworld)
                </pre>
                <div className="m-auto mt-10 grid w-[90%] grid-cols-3 gap-5">
                    <button className="rounded-md border border-gray-500 bg-[#333333] py-[15px]">
                        正しい
                    </button>
                    <button className="rounded-md border border-gray-500 py-[15px]">
                        正しくない
                    </button>
                </div>
                <button className="m-auto mt-20 block w-[200px] rounded-md border border-gray-500 py-[15px]">
                    解答する
                </button>
            </section>
        </div>
    );
}
