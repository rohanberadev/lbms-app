import { relations } from "drizzle-orm";
import { index, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { BorrowRecordTable } from "./borrowRecord";
import { CategoryTable } from "./category";
import { ReservationTable } from "./reservation";

export const BookTable = pgTable(
    "books",
    {
        id,
        title: varchar().notNull(),
        author: varchar().notNull(),
        isbn: varchar().unique(),
        imageUrl: text().notNull(),
        publisher: varchar(),
        year: integer().notNull(),
        totalCopies: integer().notNull().default(0),
        availableCopies: integer().notNull().default(0),
        categoryId: varchar().references(() => CategoryTable.id, {
            onDelete: "set null",
        }),
        createdAt,
        updatedAt,
    },
    (table) => [index().on(table.isbn)]
);

export const bookRelations = relations(BookTable, ({ one, many }) => ({
    category: one(CategoryTable, {
        fields: [BookTable.categoryId],
        references: [CategoryTable.id],
    }),
    borrowRecords: many(BorrowRecordTable),
    reservations: many(ReservationTable),
}));
