
export function removeParagraphTags(summary: string) {
    summary = summary.replace(/<p>/g, "");
    return summary.replace(/[</p>]/g, "");
  }