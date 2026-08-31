/* oxlint-disable */

/**
 * @description 课堂题目状态机：\r\nPending -> Open（开放）\r\nOpen -> Closed（截止）\r\nClosed -> AnswerPublished（公布答案；匿名统计随答案一并可见）
 *
 * Format: `int32`
 * @type integer
 */
export type ClassroomSessionQuestionStatus = number;
