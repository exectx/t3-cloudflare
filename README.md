> [!IMPORTANT]
>
> - Turso branch - [turso](https://github.com/van14U/t3-cloudflare/tree/turso-db)
> - Cloudflare D1 branch - [d1](https://github.com/van14U/t3-cloudflare/tree/main)

- [x] Next.js
- [x] Cloudflare pages (next-on-pages)
- [x] tRPC
- [x] DrizzleORM (Cloudflare D1)
- [x] Drizzle studio (local and remote with d1-http driver)
- [ ] No Auth

## Installation

You can use this as a template or you can run (Cloudflare C3 CLI) using pnpm as a package manager:

```sh
pnpx create-cloudflare@latest --template=https://github.com/exectx/t3-cloudflare.git
```

## Cloudflare setup

1. Create a D1 Database, Cloudflare's [guide](https://developers.cloudflare.com/d1/get-started/#3-create-a-database) then update `database_id` in wrangler.toml

   ```sh
   pnpx wrangler d1 create <DATABASE-NAME>
   ```

1. Configure environment variables:

   ```sh
   cp .dev.vars.example .dev.vars
   ```

1. After installing dependencies generate migration files

   ```sh
   pnpm db:generate
   ```

   and run migrations or push the changes

   ```sh
   # locally
   pnpm db:migrate:local
   # or run on a production db
   # `pnpm db:migrate` which needs CLOUDFLARE_* env vars
   # or `pnpm d1:migrate:remote` which uses wrangler
   ```

   (Optional) For faster development and prototyping, you can `push` the changes

   ```sh
   # locally
   pnpm db:push:local
   # remotely (needs CLOUDFLARE_* env vars)
   pnpm db:push
   ```

1. Run nextjs

   You can run the dev server

   ```sh
   pnpm dev
   ```

   Or run a local production build

   ```sh
   pnpm preview
   ```

1. (OPTIONAL) Run proxy bindings (previously needed for HMR):

   ```sh
   pnpm bindings
   ```

1. To deploy to Cloudflare, follow [cloudflare's Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/#connect-your-application-to-the-github-repository-via-the-cloudflare-dashboard)

> [!WARNING]  
> Don't forget to set the environment variables in the Cloudflare dashboard and to run migrations on the production database.

## Drizzle Studio

To access the local sqlite D1 database you need to run the following command.
You don't need any cloudflare environment variables for this.

```sh
pnpm db:studio:local
```

To access the remote D1 database you need to run the following command. It needs valid `CLOUDFLARE_*` environment variables:

- You can find accountId, databaseId and token in Cloudflare dashboard
- To get accountId go to Workers & Pages -> Overview -> copy Account ID from the right sidebar
- To get databaseId open D1 database you want to connect to and copy Database ID
- To get token go to My profile -> API Tokens and create token with D1 edit permissions

Now you can run drizzle studio

```sh
pnpm db:studio
```
