export function removeParagraphTags(summary: string): string {
  summary = summary.replace(/<[a-z]+>/gi, "");
  return summary.replace(/<\/[a-z]+>/gi, "");
}
