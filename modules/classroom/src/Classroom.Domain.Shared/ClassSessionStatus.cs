namespace Classroom;

/// <summary>
/// 课堂状态机（提示词第五节）：
/// Preparing -> Waiting（开始课堂）
/// Waiting  -> Answering（开放题目）
/// Answering -> Explaining（截止题目，进入讲评阶段）
/// Explaining -> Answering（开放下一题）
/// 任意非 Finished -> Finished（结束课堂）
/// </summary>
public enum ClassSessionStatus
{
    Preparing = 0,
    Waiting = 10,
    Answering = 20,
    Explaining = 30,
    Finished = 40
}
