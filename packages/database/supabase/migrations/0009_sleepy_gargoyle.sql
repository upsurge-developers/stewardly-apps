CREATE TABLE IF NOT EXISTS "groups" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"leader_id" uuid,
	"description" text
);
--> statement-breakpoint
DROP TABLE "attendance" CASCADE;
--> statement-breakpoint
DROP TABLE "calendars" CASCADE;
--> statement-breakpoint
DROP TABLE "content" CASCADE;
--> statement-breakpoint
DROP TABLE "donations" CASCADE;
--> statement-breakpoint
DROP TABLE "event_payments" CASCADE;
--> statement-breakpoint
DROP TABLE "messages" CASCADE;
--> statement-breakpoint
DROP TABLE "reports" CASCADE;
--> statement-breakpoint
DROP TABLE "resources" CASCADE;
--> statement-breakpoint
DROP TABLE "sermon_streams" CASCADE;
--> statement-breakpoint
DROP TABLE "small_groups" CASCADE;
--> statement-breakpoint
DROP TABLE "social_shares" CASCADE;
--> statement-breakpoint
DROP TABLE "volunteer_positions" CASCADE;
--> statement-breakpoint
DROP TABLE "volunteer_rewards" CASCADE;
--> statement-breakpoint
DROP TABLE "volunteers" CASCADE;
--> statement-breakpoint
ALTER TABLE "members"
	RENAME COLUMN "contact_info" TO "email";
--> statement-breakpoint
-- ALTER TABLE "group_members" DROP CONSTRAINT "group_members_group_id_small_groups_id_fk";
--> statement-breakpoint
ALTER TABLE "prayer_requests" DROP CONSTRAINT "prayer_requests_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "sermons"
ADD COLUMN "link" text;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "groups"
ADD CONSTRAINT "groups_leader_id_profiles_id_fk" FOREIGN KEY ("leader_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "group_members"
ADD CONSTRAINT "group_members_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
ALTER TABLE "prayer_requests"
ADD CONSTRAINT "prayer_requests_user_id_members_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."members"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "members" DROP COLUMN IF EXISTS "demographics";
--> statement-breakpoint
ALTER TABLE "members" DROP COLUMN IF EXISTS "involvement";
--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "role";