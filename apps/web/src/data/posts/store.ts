import * as React from "react";

import { seedPosts, type Post, type PostDraft } from "./types";

const STORAGE_KEY = "tsr-mono.posts";

/**
 * Posts are persisted to localStorage so the CRUD flow survives a refresh —
 * there is no backend in this scaffold.
 *
 * The public surface is a `useSyncExternalStore`-friendly store rather than a
 * reducer, because the persisted snapshot must stay referentially stable
 * between renders: returning a freshly parsed array each call would make
 * `useSyncExternalStore` loop forever.
 */
type Listener = () => void;

const listeners = new Set<Listener>();

let posts: Post[] = load();

function load(): Post[] {
  if (typeof localStorage === "undefined") return seedPosts;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedPosts;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return seedPosts;
    return parsed as Post[];
  } catch {
    // Corrupt or unreadable payload — fall back to the seed rather than crash.
    return seedPosts;
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {
    // Quota or private-mode failures are non-fatal for this scaffold.
  }
}

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Post[] {
  return posts;
}

/** Newest first — created posts should show up at the top of the list. */
function sortPosts(next: Post[]): Post[] {
  return [...next].sort((a, b) => b.updatedAt - a.updatedAt);
}

function commit(next: Post[]) {
  posts = sortPosts(next);
  persist();
  emit();
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `p_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

/** Subscribe to the whole collection. Use with `useSyncExternalStore`. */
export function subscribePosts(listener: Listener) {
  return subscribe(listener);
}

/** Stable snapshot of the whole collection. */
export function getPostsSnapshot(): Post[] {
  return getSnapshot();
}

/** Server snapshot — this is a pure SPA, so it is never used in practice. */
export function getPostsServerSnapshot(): Post[] {
  return seedPosts;
}

export function createPost(draft: PostDraft): Post {
  const now = Date.now();
  const post: Post = { id: newId(), ...draft, createdAt: now, updatedAt: now };
  commit([...posts, post]);
  return post;
}

export function updatePost(id: string, draft: PostDraft): Post | undefined {
  let updated: Post | undefined;

  const next = posts.map((post) => {
    if (post.id !== id) return post;
    updated = { ...post, ...draft, updatedAt: Date.now() };
    return updated;
  });

  if (updated) commit(next);
  return updated;
}

export function deletePost(id: string): boolean {
  const next = posts.filter((post) => post.id !== id);
  if (next.length === posts.length) return false;
  commit(next);
  return true;
}

/** Restore the seed collection — handy for demos and manual testing. */
export function resetPosts() {
  commit(seedPosts);
}

/** React binding: re-renders whenever the collection changes. */
export function usePosts(): Post[] {
  return React.useSyncExternalStore(subscribePosts, getPostsSnapshot, getPostsServerSnapshot);
}

/** Look up one post by id. Returns `undefined` when it does not exist. */
export function usePost(id: string): { post: Post | undefined; isLoading: false } {
  const all = usePosts();
  const post = React.useMemo(() => all.find((item) => item.id === id), [all, id]);
  // The store is synchronous, but the shape mirrors what an async data source
  // would return, so swapping in a real API later does not change callers.
  return { post, isLoading: false };
}
