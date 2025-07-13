import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { BookTable } from "./book";

export const CategoryTable = pgTable("categories", {
    id,
    name: varchar().notNull().unique(),
    createdAt,
    updatedAt,
});

export const categoryRelations = relations(CategoryTable, ({ many }) => ({
    books: many(BookTable),
}));
