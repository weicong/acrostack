export function buildValidationProps(showError: boolean, errorMessage?: string) {
  return {
    validateStatus: showError ? ("error" as const) : undefined,
    help: showError ? errorMessage : undefined,
  };
}

export function getTextViewValue(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  if (typeof value === "string") {
    return value;
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint" ||
    typeof value === "symbol"
  ) {
    return String(value);
  }

  try {
    return JSON.stringify(value);
  } catch {
    return Object.prototype.toString.call(value);
  }
}

export function getCheckboxViewValue(value: unknown): string {
  return value ? "是" : "否";
}
