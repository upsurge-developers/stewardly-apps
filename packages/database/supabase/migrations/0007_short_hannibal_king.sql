ALTER TABLE "profiles" DROP CONSTRAINT "profiles_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "profiles"
ALTER COLUMN "user_id"
SET DATA TYPE character varying(255);
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "profiles"
ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
DROP TABLE "users";
--> statement-breakpoint