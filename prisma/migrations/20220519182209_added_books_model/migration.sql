-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "edition" DECIMAL(65,30) NOT NULL,
    "year" DECIMAL(65,30) NOT NULL,
    "launch" TIMESTAMP(3) NOT NULL,
    "condition" TEXT NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "institution_id" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
