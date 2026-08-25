/**
 * 聊天页 UI 常量。
 */

/** 悬停气泡时提供的表情反应，与 ABP Commercial Chat 模块一致。 */
export const REACTIONS = ["👍", "❤️", "😂", "😍", "🎉", "🔥"] as const;

/** 最后一次 TypingNotification 后提示保持可见的时长（毫秒）。 */
export const TYPING_HINT_TTL_MS = 5000;

/** 输入中调用 SendTypingNotification 的防抖窗口（毫秒）。 */
export const TYPING_NOTIFY_DEBOUNCE_MS = 2500;

/** 消息列表分页参数（页面查询与缓存失效保持一致）。 */
export const MESSAGE_PAGE = { SkipCount: 0, MaxResultCount: 100 };
