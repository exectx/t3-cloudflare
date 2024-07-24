# T3-App templates - Cloudflare Pages

This is a collection of basic create-t3-app templates compatible with Cloudflare pages.
You can use the templates using (Cloudflare C3 CLI) using pnpm as package manager:

D1 template (no auth):

```sh
pnpm create cloudflare@latest --template=https://github.com/exectx/t3-cloudflare/templates/d1
```

Turso template (no auth):

```sh
pnpm create cloudflare@latest --template=https://github.com/exectx/t3-cloudflare/templates/turso
```

## Template guides

- [Cloudflare D1 (no-auth)](./templates/d1/README.md)
- [Turso DB (no-auth)](./templates/turso/README.md)

## TODO Templates

- [x] T3 + D1 + Drizzle ORM/KIT
- [x] T3 + TursoDB + Drizzle ORM/KIT
- [ ] T3 + tRPC (only)
