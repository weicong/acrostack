/**
 * 试卷编辑器表单类型：已选题目条目与表单状态。
 */

/** 已选题目条目（保持选择顺序）。 */
export interface SelectedQuestion {
  id: string;
  type: number;
  stem: string;
}

export interface QuizFormState {
  name: string;
  description: string;
  /** 选择顺序即试卷题目顺序。 */
  selected: SelectedQuestion[];
}
