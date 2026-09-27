/**
 * Public surface of the posts feature.
 *
 * Everything outside this folder — routes included — imports from
 * `@/features/posts` only, never from `./data`, `./components` or `./lib`
 * directly. Keeping the surface explicit is what makes the boundary real:
 * you can delete this feature and see exactly what breaks.
 */

export {
  createPost,
  deletePost,
  updatePost,
  usePost,
  usePosts,
  EMPTY_DRAFT,
  type Post,
  type PostDraft,
} from "./data";
export { PostForm } from "./components/post-form";
export { excerpt } from "./lib/excerpt";
