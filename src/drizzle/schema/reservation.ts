import { relations } from "drizzle-orm";
import { pgEnum, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { id } from "../schemaHelper";
import { BookTable } from "./book";
import { UserTable } from "./user";

export const reservationStatus = [
    "requested",
    "issued",
    "cancelled",
    "fulfilled",
] as const;
export type ReservationStatus = (typeof reservationStatus)[number];
export const reservationStatusEnum = pgEnum(
    "book_reservation_status",
    reservationStatus
);

export const ReservationTable = pgTable("reservations", {
    id,
    userId: varchar().references(() => UserTable.id, { onDelete: "cascade" }),
    bookId: varchar().references(() => BookTable.id, { onDelete: "cascade" }),
    reservedAt: timestamp({ withTimezone: true }).notNull(),
    dueDate: timestamp({ withTimezone: true }).notNull(),
    status: reservationStatusEnum().notNull(),
});

export const reservationRelations = relations(ReservationTable, ({ one }) => ({
    user: one(UserTable, {
        fields: [ReservationTable.userId],
        references: [UserTable.id],
    }),
    book: one(BookTable, {
        fields: [ReservationTable.bookId],
        references: [BookTable.id],
    }),
}));
