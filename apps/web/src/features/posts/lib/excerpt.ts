import type { Post } from "../data";

/**
 * First line of the body, used as a list preview.
 *
 * Lives inside the feature rather than in `lib/` because it is typed against
 * `Post` — a posts-specific helper, not a general-purpose formatter.
 */
export function excerpt(post: Post, max = 80): string {
  const text = post.body.replace(/\s+/g, " ").trim();
  if (!text) return "（暂无正文）";
  return text.length > max ? `${text.slice(0, max)}…` : text;
}
