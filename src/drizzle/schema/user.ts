import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelper";
import { BookTable } from "./book";
import { ReservationTable } from "./reservation";

export const UserTable = pgTable("users", {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    imageUrl: varchar().notNull(),
    email: varchar().notNull().unique(),
    createdAt,
    updatedAt,
});

export const userRelations = relations(UserTable, ({ many }) => ({
    books: many(BookTable),
    reservations: many(ReservationTable),
}));
