CREATE TABLE IF NOT EXISTS "invites" (
  "uuid4" uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" text NOT NULL,
  "createdAt" timestamp DEFAULT now() NOT NULL
);
-- ALTER TABLE "invites"
-- ADD PRIMARY KEY ("uuid4");
--> statement-breakpoint
ALTER TABLE "invites"
ALTER COLUMN "uuid4"
SET DEFAULT gen_random_uuid();
--> statement-breakpoint
ALTER TABLE "invites"
ALTER COLUMN "uuid4"
SET NOT NULL;