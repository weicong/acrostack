import type { Post } from "@/data/posts";

/** `2026-09-24 10:30` — short, locale-stable, good enough for a scaffold. */
export function formatDateTime(value: number): string {
  const d = new Date(value);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

/** First line of the body, used as a list preview. */
export function excerpt(post: Post, max = 80): string {
  const text = post.body.replace(/\s+/g, " ").trim();
  if (!text) return "（暂无正文）";
  return text.length > max ? `${text.slice(0, max)}…` : text;
}
