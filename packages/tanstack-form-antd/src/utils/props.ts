export function buildValidationProps(showError: boolean, errorMessage?: string) {
  return {
    validateStatus: showError ? ("error" as const) : undefined,
    help: showError ? errorMessage : undefined,
  };
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function getTextViewValue(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  if (Array.isArray(value)) {
    const items = value.map((item) => getTextViewValue(item)).filter((item) => item !== "-");

    return items.length > 0 ? items.join("、") : "-";
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

export function getDateViewValue(value: unknown): string {
  if (isObject(value) && typeof value.format === "function") {
    return value.format("YYYY-MM-DD");
  }

  return getTextViewValue(value);
}

export function getDateTimeViewValue(value: unknown, format = "YYYY-MM-DD HH:mm:ss"): string {
  if (isObject(value) && typeof value.format === "function") {
    return value.format(format);
  }

  return getTextViewValue(value);
}

export function getRangeViewValue(
  value: unknown,
  itemFormatter: (item: unknown) => string = getTextViewValue,
): string {
  if (!Array.isArray(value) || value.length === 0) {
    return "-";
  }

  const items = value.map((item) => itemFormatter(item)).filter((item) => item !== "-");
  return items.length > 0 ? items.join(" ~ ") : "-";
}

export function getUploadViewValue(value: unknown): string {
  if (!Array.isArray(value) || value.length === 0) {
    return "-";
  }

  const names = value
    .map((item) => {
      if (isObject(item) && typeof item.name === "string" && item.name.length > 0) {
        return item.name;
      }

      return getTextViewValue(item);
    })
    .filter((item) => item !== "-");

  return names.length > 0 ? names.join("、") : "-";
}
