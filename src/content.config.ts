import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    /** Editorial section label rendered as eyebrow above the title. */
    kind: z.enum(["NOTE", "ESSAY", "FIELD NOTE"]).default("NOTE"),
    /** Render a drop cap on the first letter of the lead paragraph. */
    dropCap: z.boolean().default(false),
  }),
});

export const collections = { blog };
