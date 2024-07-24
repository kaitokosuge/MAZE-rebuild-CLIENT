"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {
    const [isHover, setIsHover] = useState(false);
    const handleMouseHover = () => {
        setIsHover(!isHover);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
        setIsOpenTech(false);
        setIsOpenOthers(false);
        setIsOpenLevel(false);
    };
    const [isOpenTech, setIsOpenTech] = useState(false);
    const handleTechArea = () => {
        setIsOpenTech(!isOpenTech);
    };

    const [isOpenOthers, setIsOpenOthers] = useState(false);
    const handleOtherArea = () => {
        setIsOpenOthers(!isOpenOthers);
    };

    const [isOpenLevel, setIsOpenLevel] = useState(false);
    const handleLevelArea = () => {
        setIsOpenLevel(!isOpenLevel);
    };
    return (
        <div
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseLeave}
            className="min-h-screen min-w-[65px]"
        >
            <div
                className={
                    isHover
                        ? "border-maze-right fixed top-0 z-20 h-screen w-[220px] overflow-scroll border-r bg-white px-[12px] pb-20 duration-300"
                        : "border-maze-right fixed top-0 z-20 h-screen w-[65px] overflow-hidden border-r bg-white px-[12px] duration-300"
                }
            >
                <Link
                    href="/"
                    className="border-maze-right flex items-center whitespace-nowrap border-b bg-white pb-[10px] pt-[12px]"
                >
                    <img src="./app-icons/maze-logo.svg" />
                    <h1 className="maze-font text-maze-right ml-[25px] text-2xl font-bold">
                        MAZE
                    </h1>
                </Link>
                <Link
                    href="/profile"
                    className="relative mt-[10px] flex items-center whitespace-nowrap rounded-[5px] bg-white p-1 duration-300 hover:bg-gray-100"
                >
                    {/* <div className="h-[34px] w-[34px] bg-black"></div> */}
                    <img src="./app-icons/home.svg" className="" />
                    <p className="text-maze-right ml-[25px] overflow-scroll font-bold">
                        kaitokosuge
                    </p>
                </Link>
                <Link
                    href="/home"
                    className="relative mt-[10px] flex items-center whitespace-nowrap rounded-[5px] bg-white p-1 duration-300 hover:bg-gray-100"
                >
                    <img src="./app-icons/home.svg" className="" />
                    <p className="text-maze-right ml-[25px] font-bold">
                        ホーム
                    </p>
                </Link>
                <div
                    onClick={handleLevelArea}
                    className="relative mt-[10px] flex cursor-pointer items-center whitespace-nowrap rounded-[5px] bg-white p-1 duration-300 hover:w-full hover:bg-gray-100"
                >
                    <img src="./app-icons/level.svg" />
                    <div className="ml-[25px] flex items-center">
                        <p className="text-maze-right relative font-bold">
                            難易度
                        </p>
                        <img
                            src="./app-icons/under-arrow.svg"
                            className={
                                isHover
                                    ? isOpenLevel
                                        ? "absolute right-2 h-[15px] w-[15px] rotate-180 duration-300"
                                        : "absolute right-2 h-[15px] w-[15px] duration-300"
                                    : "absolute right-2 h-[15px] w-[15px] opacity-0 duration-100"
                            }
                        />
                    </div>
                </div>
                {isOpenLevel && (
                    <div className="relative -z-20 w-full duration-500">
                        <Link
                            href="/tech/typescript"
                            className="flex w-full items-center whitespace-nowrap rounded-[5px] bg-white px-[15px] py-[12px] duration-300 hover:bg-gray-100"
                        >
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                初級
                            </p>
                        </Link>
                        <Link
                            href="/tech/typescript"
                            className="flex w-full items-center whitespace-nowrap rounded-[5px] bg-white px-[15px] py-[12px] duration-300 hover:bg-gray-100"
                        >
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                中級
                            </p>
                        </Link>
                    </div>
                )}
                <div
                    onClick={handleTechArea}
                    className="relative mt-[10px] flex cursor-pointer items-center whitespace-nowrap rounded-[5px] bg-white p-1 duration-300 hover:w-full hover:bg-gray-100"
                >
                    <img src="./app-icons/tech.svg" />
                    <div className="ml-[25px] flex items-center">
                        <p className="text-maze-right relative font-bold">
                            技術
                        </p>
                        <img
                            src="./app-icons/under-arrow.svg"
                            className={
                                isHover
                                    ? isOpenTech
                                        ? "absolute right-2 h-[15px] w-[15px] rotate-180 duration-300"
                                        : "absolute right-2 h-[15px] w-[15px] duration-300"
                                    : "absolute right-2 h-[15px] w-[15px] opacity-0 duration-100"
                            }
                        />
                    </div>
                </div>
                {isOpenTech && (
                    <div className="relative -z-20 w-full duration-500">
                        <Link
                            href="/tech/typescript"
                            className="flex items-center whitespace-nowrap rounded-[5px] bg-white px-[15px] py-[12px] duration-300 hover:bg-gray-100"
                        >
                            <img
                                src="./tech-icons/typescript.svg"
                                className="ml-[10px] w-[20px]"
                            />
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                TypeScript
                            </p>
                        </Link>
                    </div>
                )}
                <div
                    onClick={handleOtherArea}
                    className="relative mt-[10px] flex cursor-pointer items-center whitespace-nowrap rounded-[5px] bg-white p-1 duration-300 hover:w-full hover:bg-gray-100"
                >
                    <img src="./app-icons/others.svg" />
                    <div className="ml-[25px] flex items-center">
                        <p className="text-maze-right relative font-bold">
                            その他
                        </p>
                        <img
                            src="./app-icons/under-arrow.svg"
                            className={
                                isHover
                                    ? isOpenOthers
                                        ? "absolute right-2 h-[15px] w-[15px] rotate-180 duration-300"
                                        : "absolute right-2 h-[15px] w-[15px] duration-300"
                                    : "absolute right-2 h-[15px] w-[15px] opacity-0 duration-100"
                            }
                        />
                    </div>
                </div>
                {isOpenOthers && (
                    <div className="relative -z-30 w-full duration-500">
                        <Link
                            href="/tech/typescript"
                            className="flex items-center whitespace-nowrap rounded-[5px] px-[15px] py-[12px] duration-300 hover:bg-gray-100"
                        >
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                オブジェクト指向
                            </p>
                        </Link>
                        <Link
                            href="/tech/typescript"
                            className="flex items-center whitespace-nowrap rounded-[5px] px-[15px] py-[12px] duration-300 hover:bg-gray-100"
                        >
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                if文
                            </p>
                        </Link>
                        <Link
                            href="/tech/typescript"
                            className="flex items-center whitespace-nowrap rounded-[5px] px-[15px] py-[12px] duration-300 hover:bg-gray-100"
                        >
                            <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                for文
                            </p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
