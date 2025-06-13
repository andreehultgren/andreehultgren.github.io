// Utility to interpolate between two hex colors
export function interpolateColor(
  start: string,
  end: string,
  t: number
): string {
  // Remove # if present
  const s = start.replace("#", "");
  const e = end.replace("#", "");
  // Parse r,g,b
  const sr = Number.parseInt(s.substring(0, 2), 16);
  const sg = Number.parseInt(s.substring(2, 4), 16);
  const sb = Number.parseInt(s.substring(4, 6), 16);
  const er = Number.parseInt(e.substring(0, 2), 16);
  const eg = Number.parseInt(e.substring(2, 4), 16);
  const eb = Number.parseInt(e.substring(4, 6), 16);
  // Interpolate
  const r = Math.round(sr + (er - sr) * t);
  const g = Math.round(sg + (eg - sg) * t);
  const b = Math.round(sb + (eb - sb) * t);
  // Return as hex
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
