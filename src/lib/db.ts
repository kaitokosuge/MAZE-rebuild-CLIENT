import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// import { PrismaClient } from "@prisma/client";

// declare global {
//     var cachePrisma: PrismaClient;
// }

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "development") {
//     prisma = new PrismaClient();
// } else {
//     if (!global.cachePrisma) {
//         global.cachePrisma = new PrismaClient();
//     }
//     prisma = global.cachePrisma;
// }

// export const db = prisma;
