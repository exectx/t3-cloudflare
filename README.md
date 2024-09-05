# T3-App templates - Cloudflare Pages

This is a collection of basic create-t3-app templates compatible with Cloudflare pages.
You can use the templates using (Cloudflare C3 CLI) using pnpm as package manager:

D1 template (no auth) - [next steps guide](./templates/d1/README.md): 

```sh
pnpm create cloudflare@latest --template=exectx/t3-cloudflare/templates/d1
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

- [x] T3 + D1 + Drizzle ORM/KIT
- [x] T3 + TursoDB + Drizzle ORM/KIT
- [x] T3 + tRPC (only)
