/**
 * Editable site data. Touch this file to change the masthead, meta strip,
 * "currently" block, and selected work. Components read from here only.
 *
 * Keep entries short — every line ships in the public bundle.
 */

export interface MetaStripItem {
  label: string;
}

export interface NowEntry {
  /** ISO date or any short string. Shown as-is on the home + about. */
  updated: string;
  /** One sentence. No trailing period needed. */
  text: string;
}

export interface CurrentlyRow {
  /** Short term, e.g. "BUILDING". Rendered uppercase mono. */
  term: string;
  /** The value. Keep to one line. */
  value: string;
  /** Optional link target for the value. */
  href?: string;
}

export interface WorkEntry {
  /** Project name. */
  name: string;
  /** Role + outcome in one short line. */
  role: string;
  /** Year or year range. */
  year: string;
  /** Optional URL. Plain text if omitted. */
  href?: string;
  /** Surface in the home-page "Selected work" block. */
  featured?: boolean;
}

/* ----- Masthead (home page lead line) ----- */
export const MASTHEAD =
  "Andree Hultgren — fullstack developer. Notes on building software, designing products, and the craft in between.";

/* ----- Meta strip (mono uppercase line under masthead) ----- */
export const META_STRIP: MetaStripItem[] = [
  { label: "Sweden" },
  { label: "Field notes" },
  { label: "2026" },
];

/* ----- "Now" line (home + about) ----- */
export const NOW: NowEntry = {
  updated: "13 May 26",
  text: "Redesigning this site and writing about the build.",
};

/* ----- "Currently" definition list (about page) ----- */
export const CURRENTLY: CurrentlyRow[] = [
  { term: "Building", value: "Personal site and writing." },
  { term: "Reading", value: "—" },
  { term: "Listening", value: "—" },
  { term: "Location", value: "Sweden" },
];

/* ----- Selected work (home shows featured; about shows all) ----- */
export const WORK: WorkEntry[] = [
  // Example shape — replace with real projects:
  // {
  //   name: "Project Name",
  //   role: "Fullstack — designed and shipped the v1 platform.",
  //   year: "2025",
  //   href: "https://example.com",
  //   featured: true,
  // },
];

/* ----- Footer extras ----- */
export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/andreehultgren" },
  { label: "Email", href: "mailto:andreehultgren@gmail.com" },
];
