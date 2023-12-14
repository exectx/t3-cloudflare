import { sql } from "drizzle-orm";

import {
  sqliteTableCreator,
  index,
  text,
  integer,
} from "drizzle-orm/sqlite-core";

export const sqliteTable = sqliteTableCreator((name) => `ai-nextjs_${name}`);

export const posts = sqliteTable(
  "post",
  {
    id: integer("id", { mode: "number" }).primaryKey(),
    name: text("name", { length: 256 }),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);
