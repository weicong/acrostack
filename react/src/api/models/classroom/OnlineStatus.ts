/* oxlint-disable */

/**
 * @description 学员在线状态（基于 SignalR 连接 + LastSeenAt 心跳推断，允许短暂误差）。\r\n在线状态只影响教师端展示，不影响答案提交的准确性。
 *
 * Format: `int32`
 * @type integer
 */
export type ClassroomOnlineStatus = number;
