/**
 * Merge `thumbnail` + `images` for display: thumbnail first (index 0), then other images.
 * De-duplicates paths that point at the same file (e.g. thumbnail also listed in `images`).
 */
function imagePathKey(path: string): string {
  return String(path || "")
    .trim()
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/")
    .toLowerCase();
}

export function buildCarGalleryImagePaths(car: {
  thumbnail?: string | null | undefined;
  images?: unknown;
} | null): string[] {
  if (!car) return [];

  const thumb = String(car.thumbnail ?? "").trim();
  const rawList = Array.isArray(car.images) ? car.images : [];

  const paths: string[] = [];
  const seen = new Set<string>();

  if (thumb) {
    paths.push(thumb);
    seen.add(imagePathKey(thumb));
  }

  for (const item of rawList) {
    const p = String(item ?? "").trim();
    if (!p) continue;
    const key = imagePathKey(p);
    if (seen.has(key)) continue;
    seen.add(key);
    paths.push(p);
  }

  return paths;
}
