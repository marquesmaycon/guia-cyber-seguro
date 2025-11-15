CREATE TABLE "likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"section_id" integer NOT NULL,
	"fingerprint_hash" varchar(128) NOT NULL,
	"ip_address" varchar(45),
	"user_agent" varchar(500),
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "likes_section_id_fingerprint_hash_unique" UNIQUE("section_id","fingerprint_hash")
);
--> statement-breakpoint
CREATE TABLE "sections" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"likes_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "likes" ADD CONSTRAINT "likes_section_id_sections_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."sections"("id") ON DELETE no action ON UPDATE no action;