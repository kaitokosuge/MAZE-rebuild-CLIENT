import { PrismaClient } from "@prisma/client";

declare global {
    var cachePrisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "development") {
    prisma = new PrismaClient();
} else {
    if (!global.cachePrisma) {
        global.cachePrisma = new PrismaClient();
    }
    prisma = global.cachePrisma;
}

export const db = prisma;
