/*
  Warnings:

  - Added the required column `email_validated` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "email_validated" BOOLEAN NOT NULL;
