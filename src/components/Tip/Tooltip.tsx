"use client";
import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Tip({
    tipTitle,
    tipContent,
}: {
    tipTitle?: string;
    tipContent: string;
}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="ml-1">
                    <img src="./app-icons/question.svg" />
                </TooltipTrigger>
                <TooltipContent className="bg-white">
                    <p className="text-[16px]">{tipTitle}</p>
                    <p className="text-ms">{tipContent}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
