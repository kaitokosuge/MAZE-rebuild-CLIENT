-- CreateTable
CREATE TABLE "AdminTodayQuiz" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "showDay" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminTodayQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminTodayQuizChoice" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "isTrue" BOOLEAN NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "AdminTodayQuizChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtherCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OtherCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TechCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdminTodayQuizToTechCategory" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AdminTodayQuizToOtherCategory" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AdminTodayQuizToTechCategory_AB_unique" ON "_AdminTodayQuizToTechCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AdminTodayQuizToTechCategory_B_index" ON "_AdminTodayQuizToTechCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AdminTodayQuizToOtherCategory_AB_unique" ON "_AdminTodayQuizToOtherCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_AdminTodayQuizToOtherCategory_B_index" ON "_AdminTodayQuizToOtherCategory"("B");

-- AddForeignKey
ALTER TABLE "AdminTodayQuiz" ADD CONSTRAINT "AdminTodayQuiz_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminTodayQuizChoice" ADD CONSTRAINT "AdminTodayQuizChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "AdminTodayQuiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminTodayQuizToTechCategory" ADD CONSTRAINT "_AdminTodayQuizToTechCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "AdminTodayQuiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminTodayQuizToTechCategory" ADD CONSTRAINT "_AdminTodayQuizToTechCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "TechCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminTodayQuizToOtherCategory" ADD CONSTRAINT "_AdminTodayQuizToOtherCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "AdminTodayQuiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminTodayQuizToOtherCategory" ADD CONSTRAINT "_AdminTodayQuizToOtherCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "OtherCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
