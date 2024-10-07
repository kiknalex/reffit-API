-- CreateTable
CREATE TABLE "_SubscribedSubreddits" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SubscribedSubreddits_AB_unique" ON "_SubscribedSubreddits"("A", "B");

-- CreateIndex
CREATE INDEX "_SubscribedSubreddits_B_index" ON "_SubscribedSubreddits"("B");

-- AddForeignKey
ALTER TABLE "_SubscribedSubreddits" ADD CONSTRAINT "_SubscribedSubreddits_A_fkey" FOREIGN KEY ("A") REFERENCES "Subreddit"("subredditId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubscribedSubreddits" ADD CONSTRAINT "_SubscribedSubreddits_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
