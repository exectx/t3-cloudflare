# Cloudflare setup

For dev mode you need to:

1. Create a D1 Database, Cloudflare's [guide](https://developers.cloudflare.com/d1/get-started/#3-create-a-database)

   ```sh
   pnpx wrangler d1 create <DATABASE-NAME>
   ```

1. Copy the `.dev.vars.example` file to `.dev.vars` and fill in the necessary information

   ```sh
   cp .dev.vars.example .dev.vars
   ```

1. Copy `wrangler.toml.example` to `wrangler.toml` and replace the `database_id` with the one you created in the first step.

   ```sh
   cp wrangler.toml.example wrangler.toml
   ```

1. After installing dependencies generate migration files

   ```sh
   pnpm db:generate
   ```

   and run migrations

   ```sh
   # locally
   pnpm db:migrate:local
   # or run on production
   # pnpm db:migrate:prod
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

> Don't forget to set the environment variables in the Cloudflare dashboard and to run migrations on the production database.

# Drizzle Studio

To access the local sqlite D1 database you need to run the following command.
You don't need any cloudflare environment variables for this.

```sh
pnpm db:studio:local
```

To access the production D1 database you need to run the following command. It needs valid `CLOUDFLARE_*` environment variables:

- You can find accountId, databaseId and token in Cloudflare dashboard
- To get accountId go to Workers & Pages -> Overview -> copy Account ID from the right sidebar
- To get databaseId open D1 database you want to connect to and copy Database ID
- To get token go to My profile -> API Tokens and create token with D1 edit permissions

Now you can run drizzle studio

```sh
pnpm db:studio:prod
```

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
