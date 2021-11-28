# Template of Next.js + NextAuth.js + Prisma with MongoDB

## What is this

The minimum Next.js template repository implemented Authentication and Persistence in MongoDB using NextAuth.js and Prisma.

## How to use it

- Click `Use this template` button on GitHub repository and create your new repository.
- `git clone` your new repository.
- `cp .env.sample .env` and Edit it.
  - Hint: You can generate `NEXTAUTH_SECRET` value via `openssl rand -base64 32` command. https://next-auth.js.org/configuration/options#secret
  - This template has implemented only Twitter provider authentication, So you should get Twitter Client ID and Client Secret at Twitter Developer Portal, But you can use other soo many providers that support NextAuth.js if you want. https://next-auth.js.org/providers/overview

Run following commands:

```
npm ci
npm i -g prisma
prisma generate
```

### Notice

We don't need `prisma migrate` command because we are riding on the MongoDB!
