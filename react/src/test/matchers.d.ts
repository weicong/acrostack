import "@testing-library/jest-dom/vitest";

declare global {
  namespace Chai {
    interface Assertion {
      toBeInTheDocument(): void;
      toBeInTheDOM(container?: HTMLElement | SVGElement): void;
      toBeVisible(): void;
      toBeEmpty(): void;
      toBeDisabled(): void;
      toBeEnabled(): void;
      toBeInvalid(): void;
      toBeRequired(): void;
      toBeValid(): void;
      toContainElement(element: HTMLElement | SVGElement | null): void;
      toContainHTML(htmlText: string): void;
      toHaveAccessibleDescription(description?: string | RegExp): void;
      toHaveAccessibleName(name?: string | RegExp): void;
      toHaveAttribute(attr: string, value?: string): void;
      toHaveClass(...classNames: string[]): void;
      toHaveFocus(): void;
      toHaveFormValues(values: Record<string, unknown>): void;
      toHaveStyle(css: string | Record<string, unknown>): void;
      toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): void;
      toHaveValue(value?: string | string[] | number | null): void;
      toHaveDisplayValue(value: string | RegExp | Array<string | RegExp>): void;
      toBeChecked(): void;
      toBePartiallyChecked(): void;
      toHaveErrorMessage(text?: string | RegExp): void;
    }
  }
}

export {};
