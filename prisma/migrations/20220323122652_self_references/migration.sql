-- CreateTable
CREATE TABLE "_FollowRlation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FollowRlation_AB_unique" ON "_FollowRlation"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowRlation_B_index" ON "_FollowRlation"("B");

-- AddForeignKey
ALTER TABLE "_FollowRlation" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRlation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
