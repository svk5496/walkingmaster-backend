-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "isQ" BOOLEAN NOT NULL,
    "isMultipleChoice" BOOLEAN NOT NULL,
    "quiz" TEXT,
    "hint" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "explain" TEXT,
    "picture" TEXT,
    "questionId" INTEGER,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_order_key" ON "Question"("order");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
