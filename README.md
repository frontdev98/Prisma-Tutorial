# Prisma ORM tutorial
[Visit Prisma Site](https://www.prisma.io/).

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
  url      = env(DATABASE_URL)
}
```

5. Create file **.env** at root of the project and add next string:
```bash
# It creates database DATABASE in schema SCHEMA
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DATABASE?schema=SCHEMA"
```

6. Run first migration:
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