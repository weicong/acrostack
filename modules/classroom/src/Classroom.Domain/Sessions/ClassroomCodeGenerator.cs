using System;
using System.Security.Cryptography;

namespace Classroom;

/// <summary>
/// 课堂码生成器：4 位纯数字（学员手机直按数字键盘，无需切换输入法）。
/// 码空间 10^4，唯一性仅约束未结束课堂（过滤唯一索引，已结束课堂的码回收复用）；
/// 生成方按活跃课堂全局校验并重试解决冲突。
/// </summary>
public static class ClassroomCodeGenerator
{
    private const string Alphabet = "0123456789";

    public static string Generate(int length = ClassroomConsts.ClassroomCodeLength)
    {
        Span<char> code = stackalloc char[length];
        for (var i = 0; i < length; i++)
        {
            // GetInt32 内部 rejection sampling，无模偏差
            code[i] = Alphabet[RandomNumberGenerator.GetInt32(Alphabet.Length)];
        }

        return new string(code);
    }
}
