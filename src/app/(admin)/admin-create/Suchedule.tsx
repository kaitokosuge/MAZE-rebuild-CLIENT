"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Suchedule() {
    const dummyDate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [isShowSuchedule, setIsShowSuchedule] = useState(false);
    const handleShowSuchedule = () => {
        setIsShowSuchedule(!isShowSuchedule);
    };
    return (
        <>
            <div className="border-maze-right flex h-[63px] items-center justify-between border-b px-5 py-[2px] pr-20 font-bold">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <button onClick={handleShowSuchedule}>
                            今日のクイズの予定
                        </button>
                        <img
                            src="./app-icons/under-arrow.svg"
                            className={
                                isShowSuchedule
                                    ? "right-2 ml-[10px] h-[10px] w-[10px] rotate-180 duration-300"
                                    : "right-2 ml-[10px] h-[10px] w-[10px] duration-300"
                            }
                        />
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList className="ml-5 border-l">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="pl-5">
                                    クイズの作成
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="grid w-[300px] gap-3 bg-white p-4 md:w-[300px] md:grid-cols-2 lg:w-[300px]">
                                    <NavigationMenuLink>
                                        今日のクイズの作成
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>
                                        通常クイズの作成
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    クイズの一覧
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="grid w-[300px] gap-3 bg-white p-4 md:w-[300px] md:grid-cols-2 lg:w-[300px]">
                                    <NavigationMenuLink>
                                        今日のクイズ
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>
                                        通常のクイズ
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="maze-font text-2xl">MAZE Admin</div>
            </div>

            {isShowSuchedule && (
                <section className="maze-subfont flex overflow-scroll pr-10">
                    {dummyDate.map((date: number) => (
                        <div key={date}>
                            <div className="border-maze-right min-w-[130px] border-b border-r bg-[#F4F4F4] py-[10px]">
                                <p className="m-auto w-fit text-[28px] font-bold">
                                    07/2{date}
                                </p>
                                <p className="m-auto w-fit">2024 July</p>
                            </div>
                            <div className="border-maze-color relative border-r bg-[#F4F4F4] px-[8px] py-1">
                                <div className="max-h-[125px] min-w-[130px] overflow-scroll pb-10">
                                    <Link
                                        href="/tech/typescript"
                                        className="flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                                    >
                                        <img
                                            src="./tech-icons/typescript.svg"
                                            className="w-[20px]"
                                        />
                                        <p className="text-maze-right ml-[10px] text-[12px] font-bold">
                                            TypeScript
                                        </p>
                                    </Link>
                                    <Link
                                        href="/tech/typescript"
                                        className="mt-1 flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                                    >
                                        <img
                                            src="./tech-icons/typescript.svg"
                                            className="w-[20px]"
                                        />
                                        <p className="text-maze-right ml-[10px] text-[12px] font-bold">
                                            TypeScript
                                        </p>
                                    </Link>
                                    <Link
                                        href="/tech/typescript"
                                        className="mt-1 flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                                    >
                                        <img
                                            src="./tech-icons/typescript.svg"
                                            className="w-[20px]"
                                        />
                                        <p className="text-maze-right ml-[10px] text-[12px] font-bold">
                                            TypeScript
                                        </p>
                                    </Link>
                                    <Link
                                        href="/tech/typescript"
                                        className="mt-1 flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                                    >
                                        <img
                                            src="./tech-icons/typescript.svg"
                                            className="w-[20px]"
                                        />
                                        <p className="text-maze-right ml-[10px] text-[12px] font-bold">
                                            TypeScript
                                        </p>
                                    </Link>
                                </div>

                                <div className="bg-admin-date-shadow absolute bottom-0 h-[50px] w-full"></div>
                            </div>
                        </div>
                    ))}
                </section>
            )}
        </>
    );
}
