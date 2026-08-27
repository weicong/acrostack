/* oxlint-disable */

/**
 * @description 课堂状态机（提示词第五节）：\r\nPreparing -> Waiting（开始课堂）\r\nWaiting  -> Answering（开放题目）\r\nAnswering -> Explaining（截止题目，进入讲评阶段）\r\nExplaining -> Answering（开放下一题）\r\n任意非 Finished -> Finished（结束课堂）
 *
 * Format: `int32`
 * @type integer
 */
export type ClassroomClassSessionStatus = number;
