/**
 * 学员加入页（/student/join?code=xxx）。
 * 移动优先：课堂码 + 手机号 + 姓名 -> 加入课堂 -> 跳转学员答题页。
 * 首次加入任意课堂时补充 单位/职务 建立学员档案；已注册学员直接加入
 * （本机有档案时自动预填，凭 手机号+姓名 核对身份）。
 * 支持从 JoinUrl 二维码链接直接带入课堂码。
 */
import { useEffect, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  Button,
  Card,
  Field,
  Input,
  Link,
  Spinner,
  Text,
  Title1,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { usePageTitle } from "@/lib/usePageTitle";
import { joinClassroom, preJoinClassroom, classroomErrorMessage } from "../shared/utils/studentApi";
import { saveStudentSession } from "../shared/utils/studentSession";
import { loadStudentProfile, maskPhone, saveStudentProfile } from "../shared/utils/studentProfile";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: tokens.spacingVerticalL,
    background: tokens.colorNeutralBackground2,
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    padding: tokens.spacingVerticalXXL + " " + tokens.spacingHorizontalXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },
  center: { textAlign: "center" },
  recognized: {
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorBrandBackground2,
    textAlign: "center",
  },
});

export function StudentJoinPage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { dispatchToast } = useToastController();
  usePageTitle("加入课堂");

  // TanStack Router 默认按 JSON 解析 search 参数：纯数字码（?code=1234）会解析成 number，须 String 化
  const search = useSearch({ strict: false }) as { code?: string | number | undefined };
  const prefillCode = search.code != null ? String(search.code).toUpperCase() : "";

  // 本机已有档案：预填手机号/姓名，实现"扫码 -> 加入"两步直达
  const storedProfile = loadStudentProfile();

  const [classroomCode, setClassroomCode] = useState(prefillCode);
  const [phone, setPhone] = useState(storedProfile?.phone ?? "");
  const [name, setName] = useState(storedProfile?.name ?? "");
  const [unit, setUnit] = useState("");
  const [position, setPosition] = useState("");
  // needProfileChecked：已探测过档案；expanded：展示 单位/职务 字段（首次加入建档）
  const [needProfileChecked, setNeedProfileChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    if (search.code && localStorage.getItem(`classroom.student.${search.code}`)) {
      // 仅提示；课堂码不是 sessionId，无法直接恢复，由答题页按 sessionId 恢复
    }
  }, [search.code]);

  // 新课堂码为 4 位数字；兼容仍在进行中的历史 6 位字母数字码
  const code = classroomCode.trim();
  const codeValid = code.length === 4 || code.length === 6;
  const profileValid = phone.trim().length >= 6 && name.trim().length > 0;
  const extraValid = !expanded || (unit.trim().length > 0 && position.trim().length > 0);
  const canJoin = codeValid && profileValid && extraValid && !joining;

  async function handleJoin() {
    if (!canJoin) return;
    setJoining(true);
    try {
      // 两阶段：先探测是否已有档案，首次加入须补充 单位/职务 建档
      if (!needProfileChecked) {
        const pre = await preJoinClassroom({
          classroomCode: code.toUpperCase(),
          phone: phone.trim(),
        });
        setNeedProfileChecked(true);
        if (pre.needProfile) {
          setExpanded(true);
          setJoining(false);
          dispatchToast("首次加入请补充单位与职务，建立学员档案", { intent: "info" });
          return;
        }
      }

      const result = await joinClassroom({
        classroomCode: code.toUpperCase(),
        phone: phone.trim(),
        name: name.trim(),
        unit: expanded ? unit.trim() : undefined,
        position: expanded ? position.trim() : undefined,
      });

      if (result.studentProfileId && result.studentToken) {
        saveStudentProfile({
          profileId: result.studentProfileId,
          name: result.nickname ?? name.trim(),
          phone: phone.trim(),
          unit: result.unit,
          position: result.position,
          studentToken: result.studentToken,
          expiresInSeconds: result.studentTokenExpiresInSeconds ?? 0,
          storedAt: Date.now(),
        });
      }

      saveStudentSession({
        sessionId: result.sessionId!,
        participantId: result.participantId!,
        nickname: result.nickname ?? name.trim(),
        accessToken: result.accessToken!,
        expiresInSeconds: result.expiresInSeconds ?? 0,
        storedAt: Date.now(),
      });

      const groupLabel = result.groupIndex ? `学习小组${result.groupIndex}` : null;
      dispatchToast(groupLabel ? `加入成功，已分配至${groupLabel}` : "加入成功", {
        intent: "success",
      });
      void navigate({
        to: "/student/sessions/$sessionId",
        params: { sessionId: result.sessionId! },
      });
    } catch (err) {
      dispatchToast(`加入失败：${classroomErrorMessage(err)}`, { intent: "warning" });
      setJoining(false);
    }
  }

  return (
    <div className={styles.page}>
      <Card className={styles.card}>
        <div className={styles.center}>
          <Title1>加入课堂</Title1>
          <Text block size={300}>
            输入老师提供的 4 位数字课堂码
          </Text>
        </div>

        {storedProfile && (
          <div className={styles.recognized}>
            <Text size={300}>
              已识别身份：{storedProfile.name}（{maskPhone(storedProfile.phone)}）·{" "}
              <Link href="/student">我的课堂</Link>
            </Text>
          </div>
        )}

        <Field label="课堂码" required>
          <Input
            value={classroomCode}
            onChange={(_, d) => setClassroomCode(d.value.toUpperCase().slice(0, 6))}
            placeholder="如 4832"
            size="large"
            maxLength={6}
            inputMode="numeric"
            autoFocus
          />
        </Field>

        <Field label="手机号" required>
          <Input
            value={phone}
            onChange={(_, d) => {
              setPhone(d.value.replace(/[^\d]/g, "").slice(0, 11));
              setNeedProfileChecked(false);
              setExpanded(false);
            }}
            placeholder="用于识别你的学员档案"
            inputMode="numeric"
          />
        </Field>

        <Field label="姓名" required>
          <Input
            value={name}
            onChange={(_, d) => setName(d.value.slice(0, 32))}
            placeholder="课堂上的展示名字"
          />
        </Field>

        {expanded && (
          <>
            <Field label="单位" required>
              <Input
                value={unit}
                onChange={(_, d) => setUnit(d.value.slice(0, 64))}
                placeholder="如 XX 大学 / XX 公司"
              />
            </Field>
            <Field label="职务" required>
              <Input
                value={position}
                onChange={(_, d) => setPosition(d.value.slice(0, 32))}
                placeholder="如 学员 / 工程师"
              />
            </Field>
          </>
        )}

        <Button
          appearance="primary"
          size="large"
          disabled={!canJoin}
          onClick={() => void handleJoin()}
        >
          {joining ? <Spinner size="tiny" /> : "加入课堂"}
        </Button>

        <Text block size={200} style={{ textAlign: "center" }}>
          首次加入需提供单位与职务，之后加入其他课堂无需重复填写
        </Text>
      </Card>
    </div>
  );
}
