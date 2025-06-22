# Prisma ORM tutorial

Install extension [Prisma Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) (syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .prisma files).

1. Initialize project
```bash
mkdir prisma_tutorial && cd prisma_tutorial && npm init
```

2. Install prisma and prisma client
```bash
npm i -D prisma && npm i @prisma/client
```

3. Initialize prisma
```bash
npx prisma init
```

4. Open **prisma/schema.prisma** and replace corresponding strings:
```prisma
// Make sure that USERNAME has rights to create database!
datasource db {
  provider = "postgresql"
  url      = "postgresql://USERNAME:PASSWORD@localhost:5432/Projects?schema=sch_hwt_auth"
}
```

5. Run first migration:
```bash
npx prisma migrate

# Name this migrate as "init"
# You will see new file like prisma/migrations/242341234123_init/migration.sql"
```

6. Initialize @prisma/client:
```bash
# This command generates object of models in JS/TS objects
npx prisma generate
```