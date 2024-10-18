# T3-App templates - Cloudflare Pages

This is a collection of basic create-t3-app templates designed for compatibility with Cloudflare Pages. You can use these templates with the Cloudflare C3 CLI and pnpm as the package manager:

> [!NOTE]
> Feel free to open an issue or PR if you have better templates

## Live demo

Live demo at https://ct3a.exectx.run/ (cloudflare pages + next-on-pages)

- Generated using `create-t3-app` with the following options: tRPC, drizzle, no auth, tailwind, SQLite. Then modified to support D1
- D1 instance location: Eastern North America — `enam`

## Templates

D1 template (pages) - [next steps guide](./templates/d1/README.md):

> [!IMPORTANT]
> After runing the command, follow the instructions below or in the link above to finish setting up your D1 template

```sh
pnpm create cloudflare@latest --template=exectx/t3-cloudflare/templates/d1
```

<details>
<summary>Next steps... <ins>Instructions for finishing setting up your D1 database</ins></summary>

Run the following command to create a D1 Database, then update the `database_id` in `wrangler.toml`. (Cloudflare's D1 [guide](https://developers.cloudflare.com/d1/get-started/))

```sh
pnpx wrangler d1 create <DATABASE-NAME>
```

### 1. Set Up Database and Run Migrations

> Running drizzle-kit commands for remote databases requires valid cloudflare environment variables ([guide](#3-configure-cloudflare-environment-variables-optional))

Once you have updated your `wrangler.toml` with the correct `database_id`, follow the instructions below.

<details>
  <summary>Using Wrangler for <code>local</code> database</summary>

```sh
pnpm db:generate
pnpm d1:migrate:local
pnpm dev # or pnpm preview
```

</details>

<details>
  <summary>Using Wrangler for <code>remote</code> database</summary>
  
  ```sh
  pnpm db:generate
  pnpm d1:migrate:remote
  pnpm dev # or pnpm preview
  ```
</details>

<details>
  <summary>Using Drizzle-Kit for <code>local</code> database</summary>
  
  #### Using Migrations
  ```sh
  pnpm db:generate
  pnpm db:migrate:local
  pnpm dev # or pnpm preview
  ```

#### Pushing Schema Changes

```sh
pnpm db:push:local
pnpm dev # or pnpm preview
```

</details>

<details>
  <summary>Using Drizzle-Kit for <code>remote</code> database <strong>requires Cloudflare environment variables</strong></summary> 
  
  #### Using Migrations
  ```sh
  pnpm db:generate
  pnpm db:migrate
  pnpm dev # or pnpm preview
  ```

#### Pushing Schema Changes

```sh
pnpm db:push
pnpm dev # or pnpm preview
```

</details>

### 2. Deployment

To deploy to Cloudflare, you can connect your application via cloudflare dashboard (GitHub integration) or run `pnpm deploy`. follow [Cloudflare's Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/#6-deploy-to-cloudflare-pages).

### 3. Configure Cloudflare Environment Variables (Optional)

You can run migrations using `wrangler d1 migrations ...`, but if you want to use `drizzle-kit` instead, you need to configure your environment variables.

```sh
cp .dev.vars.example .dev.vars
```

You can find `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_DATABASE_ID`, and `CLOUDFLARE_TOKEN` in the Cloudflare dashboard:

- To get `CLOUDFLARE_ACCOUNT_ID`, go to Workers & Pages -> Overview -> copy Account ID from the right sidebar.
- To get `CLOUDFLARE_DATABASE_ID`, open the D1 database you want to connect to and copy the Database ID.
- To get `CLOUDFLARE_TOKEN`, go to My Profile -> API Tokens and create a token with D1 edit permissions.

Now you can run Drizzle-Kit remote commands such as `db:push`, `db:migrate`, `db:studio`, etc.

</details>

D1 template (workers)

> instructions are the same for the D1 template (no-auth)

```sh
pnpm create cloudflare@latest --template=exectx/t3-cloudflare/templates/workers-d1
```

Turso template - [next steps guide](./templates/turso/README.md):

```sh
pnpm create cloudflare@latest --template=exectx/t3-cloudflare/templates/turso
```

Just tRPC

```sh
pnpm create cloudflare@latest --template=exectx/t3-cloudflare/templates/trpc
```

## TODO Templates

- [x] T3 + D1 (cf pages)
- [x] T3 + TursoDB (cf pages)
- [x] T3 + tRPC (only) (cf pages)
- [x] T3 + D1 (cf workers)
