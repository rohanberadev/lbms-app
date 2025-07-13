import { relations } from "drizzle-orm";
import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { id } from "../schemaHelper";
import { BorrowRecordTable } from "./borrowRecord";

export const FineTable = pgTable("fines", {
    id,
    borrowRecordId: varchar().references(() => BorrowRecordTable.id),
    amount: integer().notNull(),
    paid: boolean().notNull().default(false),
});

export const fineRelations = relations(FineTable, ({ one }) => ({
    borrowRecord: one(BorrowRecordTable, {
        fields: [FineTable.borrowRecordId],
        references: [BorrowRecordTable.id],
    }),
}));
