CREATE TABLE `ai-nextjs_post` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(256),
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `ai-nextjs_post` (`name`);