import { relations } from "drizzle-orm";
import { pgEnum, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { createdAt, id } from "../schemaHelper";
import { BookTable } from "./book";
import { UserTable } from "./user";

export const borrowRecordStatus = ["borrowed", "returned", "late"] as const;
export type BorrowRecordStatus = (typeof borrowRecordStatus)[number];
export const borrowRecordStatusEnum = pgEnum(
    "books_borrow_record_status",
    borrowRecordStatus
);

export const BorrowRecordTable = pgTable("borrow_records", {
    id,
    userId: varchar().references(() => UserTable.id),
    bookId: varchar().references(() => BookTable.id),
    borrowedAt: createdAt,
    dueAt: timestamp({ withTimezone: true }).notNull(),
    returnedAt: timestamp({ withTimezone: true }),
    status: borrowRecordStatusEnum().notNull(),
});

export const borrowRecordRelations = relations(
    BorrowRecordTable,
    ({ one }) => ({
        user: one(UserTable, {
            fields: [BorrowRecordTable.userId],
            references: [UserTable.id],
        }),
        book: one(BookTable, {
            fields: [BorrowRecordTable.bookId],
            references: [BookTable.id],
        }),
    })
);
