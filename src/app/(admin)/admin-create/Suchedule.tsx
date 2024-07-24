import Link from "next/link";
import React from "react";

export default function Suchedule() {
    const dummyDate = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <section className="maze-subfont flex overflow-x-scroll pr-10">
            {dummyDate.map((date: number) => (
                <div key={date}>
                    <div className="border-maze-right min-w-[160px] border-b border-r bg-[#F4F4F4] py-[10px]">
                        <p className="m-auto w-fit text-[28px] font-bold">
                            07/2{date}
                        </p>
                        <p className="m-auto w-fit">2024 July</p>
                    </div>
                    <div className="border-maze-color relative border-r bg-[#F4F4F4] px-[8px] py-1">
                        <div className="max-h-[125px] min-w-[160px] overflow-scroll pb-10">
                            <Link
                                href="/tech/typescript"
                                className="flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
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
                                className="mt-1 flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
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
                                className="mt-1 flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
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
                                className="mt-1 flex items-center whitespace-nowrap rounded-[5px] bg-[#ffffff] px-[15px] py-[7px] duration-300 hover:bg-gray-100"
                            >
                                <img
                                    src="./tech-icons/typescript.svg"
                                    className="w-[20px]"
                                />
                                <p className="text-maze-right ml-[10px] text-[14px] font-bold">
                                    TypeScript
                                </p>
                            </Link>
                        </div>

                        <div className="bg-admin-date-shadow absolute bottom-0 h-[50px] w-full"></div>
                    </div>
                </div>
            ))}
        </section>
    );
}
