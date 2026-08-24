/**
 * 新建文件夹表单行：临时名称输入内部化，创建成功后自动清空。
 */
import { useState } from "react";
import { Button, Input, Label } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { useFileManagementStyles } from "../styles/fileManagement";

interface NewFolderFormProps {
  /** 创建中禁用按钮。 */
  pending: boolean;
  /** 提交创建；返回是否成功（内部已处理错误提示）。 */
  onCreate: (name: string) => Promise<boolean>;
}

export function NewFolderForm({ pending, onCreate }: NewFolderFormProps) {
  const styles = useFileManagementStyles();
  const [name, setName] = useState("");

  async function handleCreate() {
    const ok = await onCreate(name);
    if (ok) setName("");
  }

  return (
    <div className={styles.newFolderRow}>
      <div>
        <Label htmlFor="new-folder-name">{"新建文件夹"}</Label>
        <Input
          id="new-folder-name"
          value={name}
          onChange={(_, data) => setName(data.value)}
          placeholder={"文件夹名称"}
          appearance="outline"
        />
      </div>
      <Button
        appearance="secondary"
        icon={<Add20Regular />}
        onClick={() => void handleCreate()}
        disabled={!name.trim() || pending}
      >
        {"创建"}
      </Button>
    </div>
  );
}
