/*
  Warnings:

  - Added the required column `purchaseRate` to the `item_masters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."item_masters" ADD COLUMN     "purchaseRate" DOUBLE PRECISION NOT NULL;
