import { text, pgTable, serial, integer } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
});


export const characters = pgTable("character", {
  id: serial("id").primaryKey(),
  name: text("name"),
  xp: text("xp"),
  classId: integer("classes_id").notNull().references(() => classes.id, { onDelete: "cascade" }),
  playerId: integer("player_id").notNull().references(() => players.id, { onDelete: "cascade" }),
});


export const classes = pgTable("class", {
  id: serial("id").primaryKey(),
  name: text("name"),
  power: integer("power"),
  hp: integer("hp"),
});