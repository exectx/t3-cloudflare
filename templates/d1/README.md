## Next steps (D1 template)

> [!IMPORTANT]
> In order to run `db:push:local` or related commands, you must create a D1 Database

1. Create a D1 Database, Cloudflare's [guide](https://developers.cloudflare.com/d1/get-started/#3-create-a-database) then update `database_id` in wrangler.toml

   ```sh
   pnpx wrangler d1 create <DATABASE-NAME>
   ```

> [!WARNING]
> If `db:push:local` and `db:migrate:local` fail, just run `d1:migrate:local` or `d1:migrate:remote` to fix the issue (Those use `wrangler` instead of `drizzle-kit`).
>
> Drizzle studio won't work locally either if the former commands fail.

2. **After creating database**, Run migrations or push the changes. (via `drizzle-kit` or `wrangler` CLI)

   For **local** D1 Database:

   ```sh
   pnpm db:push:local # drizzle-kit
   ```

   ```sh
   # Or
   pnpm db:generate
   pnpm db:migrate:local # drizzle-kit
   ```

   ```sh
   # if those don't work, use wrangler CLI
   pnpm db:generate
   pnpm d1:migrate:local
   ```

   For **remote** D1 Database (Needs `CLOUDFLARE_*` env vars):

   ```sh
   pnpm db:push # drizzle-kit
   ```

   ```sh
   # Or
   pnpm db:generate
   pnpm db:migrate #drizzle-kit
   ```

   ```sh
   # if those don't work, use wrangler CLI
   pnpm db:generate
   pnpm d1:migrate:remote
   ```

> [!NOTE]
> If you want to use drizzle studio for the remote database, you need to set the `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_D1_DATABASE_ID`, `CLOUDFLARE_TOKEN` environment variables. [Cloudflare variables](#cloudflare-environment-variables) 3. Configure environment variables.

```sh
cp .dev.vars.example .dev.vars
```

1. Run nextjs

   You can run the dev server

   ```sh
   pnpm dev
   # or run a production build
   pnpm preview
   ```

1. To deploy to Cloudflare, follow [cloudflare's Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/#connect-your-application-to-the-github-repository-via-the-cloudflare-dashboard)

> [!WARNING]
> Don't forget to set the environment variables in the Cloudflare dashboard and to run migrations on the production database.

## Cloudflare environment variables

You can find `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_DATABASE_ID` and `CLOUDFLARE_TOKEN` in Cloudflare dashboard

- To get `CLOUDFLARE_ACCOUNT_ID` go to Workers & Pages -> Overview -> copy Account ID from the right sidebar
- To get `CLOUDFLARE_DATABASE_ID` open D1 database you want to connect to and copy Database ID
- To get `CLOUDFLARE_TOKEN` go to My profile -> API Tokens and create token with D1 edit permissions

Now you can run drizzle-kit remote commands such as `db:push`, `db:migrate`, `db:studio`.
