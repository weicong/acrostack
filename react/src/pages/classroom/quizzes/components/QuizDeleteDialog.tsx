/**
 * 试卷删除确认对话框：确认后调用 useQuizActions 删除，
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
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import type { QuizActions } from "../hooks/useQuizActions";

interface QuizDeleteDialogProps {
  /** 待删除试卷；非空时显示对话框。 */
  quiz: ClassroomDtosQuizDto | null;
  actions: QuizActions;
  onClose: () => void;
  /** 删除成功后回调（父组件处理翻页回退与刷新）。 */
  onDeleted: () => void;
}

export function QuizDeleteDialog({ quiz, actions, onClose, onDeleted }: QuizDeleteDialogProps) {
  async function handleDelete() {
    if (!quiz?.id || actions.deleteBusy) return;
    const ok = await actions.deleteQuiz(quiz.id);
    if (ok) {
      onClose();
      onDeleted();
    }
  }

  return (
    <Dialog
      open={quiz !== null}
      onOpenChange={(_, d) => {
        if (!d.open) onClose();
      }}
    >
      <DialogSurface>
        <DialogBody>
          <DialogTitle>删除试卷</DialogTitle>
          <Text>
            确定删除试卷"{quiz?.name}"吗？该操作不影响题库中的题目，已创建的课堂也不受影响。
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
