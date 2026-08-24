/**
 * 题目删除确认对话框：确认后调用 useQuestionActions 删除，
 * 成功后回调 onDeleted 由父级处理翻页回退与列表刷新。
 */
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Spinner,
  Text,
} from "@fluentui/react-components";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import type { QuestionActions } from "../hooks/useQuestionActions";

interface QuestionDeleteDialogProps {
  /** 待删除题目；非空时显示对话框。 */
  question: ClassroomDtosQuestionDto | null;
  actions: QuestionActions;
  onClose: () => void;
  /** 删除成功后回调（父组件处理翻页回退与刷新）。 */
  onDeleted: () => void;
}

export function QuestionDeleteDialog({
  question,
  actions,
  onClose,
  onDeleted,
}: QuestionDeleteDialogProps) {
  async function handleDelete() {
    if (!question?.id || actions.deleteBusy) return;
    const ok = await actions.deleteQuestion(question.id);
    if (ok) {
      onClose();
      onDeleted();
    }
  }

  return (
    <Dialog
      open={question !== null}
      onOpenChange={(_, d) => {
        if (!d.open) onClose();
      }}
    >
      <DialogSurface>
        <DialogBody>
          <DialogTitle>删除题目</DialogTitle>
          <Text>
            确定删除该题目吗？已在试卷中引用此题的试卷会失去该题（课堂已复制的题目不受影响）。
          </Text>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">取消</Button>
            </DialogTrigger>
            <Button
              appearance="primary"
              disabled={actions.deleteBusy}
              onClick={() => void handleDelete()}
            >
              {actions.deleteBusy ? <Spinner size="tiny" /> : "删除"}
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
