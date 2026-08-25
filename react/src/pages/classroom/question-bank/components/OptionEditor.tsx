/**
 * 题库选项编辑器：单选(Radio)/多选(Checkbox)选项行的增删改与正确答案勾选。
 * 上限 MAX_OPTIONS、最少保留 2 项；删除后重新编号 key 并同步修正正确答案。
 */
import { Button, Checkbox, Input, Radio } from "@fluentui/react-components";
import { Delete20Regular } from "@fluentui/react-icons";
import { MAX_OPTIONS, OPTION_KEYS } from "../../shared/constants/question";
import { useQuestionBankStyles } from "../styles/questionBank";
import type { OptionRow } from "../types/question";

interface OptionEditorProps {
  /** false=单选（Radio 勾选唯一答案），true=多选（Checkbox 可多选）。 */
  multiple: boolean;
  options: OptionRow[];
  correctKeys: string[];
  /** 选项数组或正确答案集合变化时回调（父组件合并进表单状态）。 */
  onChange: (next: { options?: OptionRow[]; correctKeys?: string[] }) => void;
}

export function OptionEditor({ multiple, options, correctKeys, onChange }: OptionEditorProps) {
  const styles = useQuestionBankStyles();

  function updateOption(index: number, patch: Partial<OptionRow>) {
    onChange({ options: options.map((o, i) => (i === index ? { ...o, ...patch } : o)) });
  }

  function addOption() {
    if (options.length >= MAX_OPTIONS) return;
    const key = OPTION_KEYS[options.length] ?? String(options.length + 1);
    onChange({ options: [...options, { key, text: "" }] });
  }

  function removeOption(index: number) {
    const removedKey = options[index]?.key;
    const nextOptions = options
      .filter((_, i) => i !== index)
      .map((o, i) => ({ ...o, key: OPTION_KEYS[i] ?? o.key })); // 重新编号 key
    onChange({
      options: nextOptions,
      correctKeys: correctKeys
        .filter((k) => k !== removedKey)
        .map((k) => {
          const oldIndex = OPTION_KEYS.indexOf(k);
          return oldIndex > index ? (OPTION_KEYS[oldIndex - 1] ?? k) : k;
        }),
    });
  }

  function toggleCorrectKey(key: string, checked: boolean) {
    onChange({
      correctKeys: checked ? [...correctKeys, key] : correctKeys.filter((k) => k !== key),
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {options.map((opt, i) => (
        <div key={i} className={styles.optionRow}>
          {!multiple ? (
            <Radio
              label={opt.key}
              checked={correctKeys[0] === opt.key}
              onChange={() => onChange({ correctKeys: [opt.key] })}
            />
          ) : (
            <Checkbox
              label={opt.key}
              checked={correctKeys.includes(opt.key)}
              onChange={(_, d) => toggleCorrectKey(opt.key, d.checked === true)}
            />
          )}
          <Input
            value={opt.text}
            onChange={(_, d) => updateOption(i, { text: d.value })}
            placeholder={`选项 ${opt.key} 内容`}
          />
          <Button
            size="small"
            icon={<Delete20Regular />}
            disabled={options.length <= 2}
            onClick={() => removeOption(i)}
          />
        </div>
      ))}
      <Button
        size="small"
        appearance="secondary"
        disabled={options.length >= MAX_OPTIONS}
        onClick={addOption}
      >
        添加选项
      </Button>
    </div>
  );
}
