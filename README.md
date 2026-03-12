# T3 App on Cloudflare Workers + D1

This repo is a T3 Stack app (tRPC + Drizzle + Tailwind) configured for Cloudflare Workers using
OpenNext and D1.

## Requirements

- `pnpm`
- `wrangler` (Cloudflare CLI)

## Setup

1. Install dependencies:

```sh
pnpm install
```

2. Create a D1 database and update `wrangler.jsonc` with the `database_id`:

```sh
pnpm wrangler d1 create <DATABASE_NAME>
```

3. (Optional) Configure Cloudflare env vars for remote Drizzle commands:

```sh
cp .dev.vars.example .dev.vars
```

## Local development

```sh
pnpm dev
```

## Migrations

Local D1 (Drizzle Kit):

```sh
pnpm db:generate
pnpm db:migrate
```

Remote D1 (Drizzle Kit, requires `.dev.vars`):

```sh
pnpm db:generate
pnpm db:migrate:prod
```

## Build, preview, deploy

```sh
pnpm build
pnpm preview
pnpm deploy
```

## D1 Binding

The Worker expects a D1 binding named `DB`.
