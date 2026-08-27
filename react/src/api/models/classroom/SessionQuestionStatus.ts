/* oxlint-disable */

/**
 * @description 课堂题目状态机（提示词第五节）：\r\nPending -> Open（开放）\r\nOpen -> Closed（截止）\r\nClosed -> StatisticsPublished（公布匿名统计）\r\nClosed -> AnswerPublished（公布答案）\r\nStatisticsPublished -> AnswerPublished（先公布统计后公布答案）
 *
 * Format: `int32`
 * @type integer
 */
export type ClassroomSessionQuestionStatus = number;
