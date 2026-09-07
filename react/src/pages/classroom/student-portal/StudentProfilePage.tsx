/**
 * 我的资料页（/student/profile）：学员门户。
 * 查看/编辑 姓名、单位、职务；手机号为身份锚点仅展示。
 * 支持清除本机身份（换设备/共享设备场景）。
 */
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Button,
  Card,
  Field,
  Input,
  Spinner,
  Text,
  Title1,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { usePageTitle } from "@/lib/usePageTitle";
import { classroomErrorMessage, getMyProfile, updateMyProfile } from "../shared/utils/studentApi";
import {
  clearStudentProfile,
  loadStudentProfile,
  maskPhone,
  saveStudentProfile,
} from "../shared/utils/studentProfile";
import { StudentPortalTabs } from "./StudentPortalTabs";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: tokens.spacingVerticalL,
    paddingBottom: 0,
  },
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    maxWidth: "480px",
    width: "100%",
    margin: "0 auto",
  },
  card: {
    padding: tokens.spacingVerticalL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
});

export function StudentProfilePage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { dispatchToast } = useToastController();
  usePageTitle("我的资料");

  const stored = loadStudentProfile();
  // 本地非空视图模型（生成的 DTO 字段可空，在边界处归一化）
  const [profile, setProfile] = useState<{
    id: string;
    name: string;
    phone: string;
    unit: string;
    position: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (!stored) {
      setLoading(false);
      return;
    }
    void (async () => {
      try {
        const result = await getMyProfile(stored.studentToken);
        const normalized = {
          id: result.id ?? "",
          name: result.name ?? "",
          phone: result.phone ?? "",
          unit: result.unit ?? "",
          position: result.position ?? "",
        };
        setProfile(normalized);
        setName(normalized.name);
        setUnit(normalized.unit);
        setPosition(normalized.position);
      } catch (err) {
        dispatchToast(`加载资料失败：${classroomErrorMessage(err)}`, { intent: "warning" });
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canSave =
    name.trim().length > 0 && unit.trim().length > 0 && position.trim().length > 0 && !saving;

  async function handleSave() {
    if (!stored || !canSave) return;
    setSaving(true);
    try {
      const result = await updateMyProfile(stored.studentToken, {
        name: name.trim(),
        unit: unit.trim(),
        position: position.trim(),
      });
      setProfile({
        id: result.id ?? "",
        name: result.name ?? name.trim(),
        phone: result.phone ?? "",
        unit: result.unit ?? unit.trim(),
        position: result.position ?? position.trim(),
      });
      // 同步本机缓存（展示名/单位/职务）；手机号与令牌不变
      saveStudentProfile({
        ...stored,
        name: result.name ?? name.trim(),
        unit: result.unit ?? unit.trim(),
        position: result.position ?? position.trim(),
      });
      dispatchToast("资料已更新", { intent: "success" });
    } catch (err) {
      dispatchToast(`更新失败：${classroomErrorMessage(err)}`, { intent: "warning" });
    } finally {
      setSaving(false);
    }
  }

  function handleClearIdentity() {
    clearStudentProfile();
    dispatchToast("已清除本机学员身份", { intent: "info" });
    void navigate({ to: "/student/join" });
  }

  return (
    <div className={styles.page}>
      <div className={styles.body}>
        <Title1>我的资料</Title1>

        {loading ? (
          <Card className={styles.card}>
            <div style={{ textAlign: "center" }}>
              <Spinner />
              <Text block>正在加载…</Text>
            </div>
          </Card>
        ) : !profile ? (
          <Card className={styles.card}>
            <Text block>本机还没有学员身份。</Text>
            <Button appearance="primary" as="a" href="/student/join">
              去加入课堂
            </Button>
          </Card>
        ) : (
          <Card className={styles.card}>
            <Field label="手机号（身份锚点，不可修改）">
              <Input value={maskPhone(profile.phone)} readOnly />
            </Field>
            <Field label="姓名" required>
              <Input value={name} onChange={(_, d) => setName(d.value.slice(0, 32))} />
            </Field>
            <Field label="单位" required>
              <Input value={unit} onChange={(_, d) => setUnit(d.value.slice(0, 64))} />
            </Field>
            <Field label="职务" required>
              <Input value={position} onChange={(_, d) => setPosition(d.value.slice(0, 32))} />
            </Field>
            <Button
              appearance="primary"
              size="large"
              disabled={!canSave}
              onClick={() => void handleSave()}
            >
              {saving ? <Spinner size="tiny" /> : "保存"}
            </Button>
            <Button appearance="secondary" onClick={handleClearIdentity}>
              清除本机学员身份
            </Button>
          </Card>
        )}
      </div>
      <StudentPortalTabs />
    </div>
  );
}
