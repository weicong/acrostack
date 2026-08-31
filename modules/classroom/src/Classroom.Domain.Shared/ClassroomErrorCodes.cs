namespace Classroom;

/// <summary>
/// 结构化错误码（提示词要求：错误信息使用结构化错误码）。
/// 本地化文本见 Localization/Classroom/zh-Hans.json。
/// </summary>
public static class ClassroomErrorCodes
{
    public const string InvalidStatusTransition = "Classroom:InvalidStatusTransition";
    public const string QuestionNotOpen = "Classroom:QuestionNotOpen";
    public const string QuestionClosed = "Classroom:QuestionClosed";
    public const string ClassroomFinished = "Classroom:ClassroomFinished";
    public const string ClassroomNotStarted = "Classroom:ClassroomNotStarted";
    public const string ClassroomCodeNotFound = "Classroom:ClassroomCodeNotFound";
    public const string ClassroomCodeExpired = "Classroom:ClassroomCodeExpired";
    public const string NotSessionTeacher = "Classroom:NotSessionTeacher";
    public const string ParticipantNotFound = "Classroom:ParticipantNotFound";
    public const string InvalidClassroomToken = "Classroom:InvalidClassroomToken";
    public const string TokenSessionMismatch = "Classroom:TokenSessionMismatch";
    public const string QuestionNotFound = "Classroom:QuestionNotFound";
    public const string QuizNotFound = "Classroom:QuizNotFound";
    public const string QuizInUse = "Classroom:QuizInUse";
    public const string SessionNotFound = "Classroom:SessionNotFound";
    public const string SessionQuestionNotFound = "Classroom:SessionQuestionNotFound";
    public const string InvalidAnswerFormat = "Classroom:InvalidAnswerFormat";
    public const string DuplicateClassroomCode = "Classroom:DuplicateClassroomCode";
    public const string QuestionAlreadyOpen = "Classroom:QuestionAlreadyOpen";
    public const string NoNextQuestion = "Classroom:NoNextQuestion";
    public const string VersionConflict = "Classroom:VersionConflict";
    public const string RateLimited = "Classroom:RateLimited";
    public const string InvalidPresentationToken = "Classroom:InvalidPresentationToken";
    public const string NoParticipantsToPick = "Classroom:NoParticipantsToPick";
}
