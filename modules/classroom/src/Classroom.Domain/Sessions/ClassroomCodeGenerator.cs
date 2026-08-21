using System;
using System.Security.Cryptography;

namespace Classroom;

/// <summary>
/// 课堂码生成器：6 位大写字母 + 数字，排除易混淆字符（0/O、1/I/L）。
/// 唯一性由数据库唯一索引兜底；生成方通过重试解决极小概率冲突。
/// </summary>
public static class ClassroomCodeGenerator
{
    // 排除 0O1IL 后的安全字母表：32 个字符，6 位共 2^30 组合，单租户内冲突概率可忽略
    private const string Alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

    public static string Generate(int length = ClassroomConsts.ClassroomCodeLength)
    {
        Span<char> code = stackalloc char[length];
        var bytes = RandomNumberGenerator.GetBytes(length);
        for (var i = 0; i < length; i++)
        {
            code[i] = Alphabet[bytes[i] % Alphabet.Length];
        }

        return new string(code);
    }
}
