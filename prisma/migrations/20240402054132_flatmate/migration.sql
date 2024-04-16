-- CreateTable
CREATE TABLE "FlatMate" (
    "ID" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,
    "Rent" INTEGER NOT NULL,
    "Location" TEXT NOT NULL,
    "Sharing" BOOLEAN NOT NULL,
    "Parking" BOOLEAN NOT NULL,
    "Furnished" BOOLEAN NOT NULL,
    "WithWashroom" BOOLEAN NOT NULL,
    "Balcony" BOOLEAN NOT NULL,
    "DatePosted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Images" TEXT[],

    CONSTRAINT "FlatMate_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "HackathonMate" (
    "ID" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,

    CONSTRAINT "HackathonMate_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "TravelMate" (
    "ID" SERIAL NOT NULL,
    "UserID" INTEGER NOT NULL,

    CONSTRAINT "TravelMate_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "FlatMate" ADD CONSTRAINT "FlatMate_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HackathonMate" ADD CONSTRAINT "HackathonMate_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelMate" ADD CONSTRAINT "TravelMate_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
