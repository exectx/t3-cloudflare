# Cloudflare setup

For dev mode you need to:

1. Create a D1 Database https://developers.cloudflare.com/d1/get-started/#3-create-a-database
1. Create a `.env` file and a `wrangler.toml` file with the necessary information.
1. Generate migration files:

   ```sh
   pnpm db:generate
   ```

1. Run migrations locally:

   ```sh
   pnpm db:migrate:local
   ```

1. (OPTIONAL) Run proxy bindings (previously needed for HMR):

   ```sh
   pnpm bindings
   ```

1. Run nextjs:

   ```sh
   pnpm dev
   ```

1. To deploy to Cloudflare, follow cloudflare's guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/#deploy-your-application-and-iterate

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
