import { isEmptyValue } from "../utils/isEmptyValue";
import { toDisplayText } from "../utils/toDisplayText";

export type ValidatorParams<TValue = unknown> = {
  value: TValue;
};

export type ValidatorFn<TValue = unknown> = (params: ValidatorParams<TValue>) => unknown;

export function required(message = "必填项"): ValidatorFn {
  return ({ value }) => {
    if (isEmptyValue(value)) {
      return message;
    }
    return undefined;
  };
}

export function minLength(length: number, message?: string): ValidatorFn {
  return ({ value }) => {
    if (value == null || value === "") {
      return undefined;
    }
    if (toDisplayText(value).length < length) {
      return message ?? `至少输入 ${length} 个字符`;
    }
    return undefined;
  };
}

export function maxLength(length: number, message?: string): ValidatorFn {
  return ({ value }) => {
    if (value == null || value === "") {
      return undefined;
    }
    if (toDisplayText(value).length > length) {
      return message ?? `最多输入 ${length} 个字符`;
    }
    return undefined;
  };
}

export function pattern(regexp: RegExp, message = "格式不正确"): ValidatorFn {
  return ({ value }) => {
    if (value == null || value === "") {
      return undefined;
    }
    if (!regexp.test(toDisplayText(value))) {
      return message;
    }
    return undefined;
  };
}

export function email(message = "邮箱格式不正确"): ValidatorFn {
  return pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message);
}

export function compose(...validators: ValidatorFn[]): ValidatorFn {
  return (params) => {
    for (const validator of validators) {
      const result = validator(params);
      if (result) {
        return result;
      }
    }
    return undefined;
  };
}
