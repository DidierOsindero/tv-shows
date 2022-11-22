export function removeParagraphTags(summary: string): string {
  summary = summary.replace(/<p>/g, "");
  return summary.replace(/[</p>]/g, "");
}
