-- ALTER TABLE "profiles" DROP CONSTRAINT "profiles_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "profiles"
ADD COLUMN "user" uuid NOT NULL;
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "user_id";
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "profiles"
ADD CONSTRAINT "profiles_user_users_id_fk" FOREIGN KEY ("user") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint