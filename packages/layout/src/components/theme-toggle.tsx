import { AppWindow, Monitor, Moon, Palette, Sun } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { cn } from "@workspace/ui/lib/utils";

import { useTheme, type ThemeMode, type ThemeStyle } from "#hooks/use-theme";

export type ThemeToggleProps = {
  /** Override the visible copy (i18n). Defaults are Simplified Chinese. */
  labels?: {
    /** `aria-label` of the header button. */
    trigger?: string;
    /** Section label above the mode switch. */
    title?: string;
    light?: string;
    dark?: string;
    system?: string;
    /** Palette entries. */
    defaultStyle?: string;
    fluentStyle?: string;
  };
};

/**
 * Header control for both theme axes:
 *
 * ```
 * ┌─────────────────────┐
 * │ 主题    [☀|☾|🖥]      │   ← mode, icons in a segmented switch
 * ├─────────────────────┤
 * │ 默认风格              │   ← palette, radio items
 * │ Fluent 风格           │
 * └─────────────────────┘
 * ```
 *
 * The mode buttons are icon-only: the pictogram is what people recognise, and
 * `title` / `aria-label` carry the full wording (浅色 / 深色 / 跟随系统).
 */
export function ThemeToggle({ labels }: ThemeToggleProps = {}) {
  const { mode, setMode, style, setStyle } = useTheme();

  const modes: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
    { value: "light", label: labels?.light ?? "浅色", icon: Sun },
    { value: "dark", label: labels?.dark ?? "深色", icon: Moon },
    { value: "system", label: labels?.system ?? "跟随系统", icon: Monitor },
  ];

  const styles: { value: ThemeStyle; label: string; icon: typeof Palette }[] = [
    { value: "default", label: labels?.defaultStyle ?? "默认风格", icon: Palette },
    { value: "fluent", label: labels?.fluentStyle ?? "Fluent 风格", icon: AppWindow },
  ];

  const Active = modes.find((option) => option.value === mode)?.icon ?? Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label={labels?.trigger ?? "主题设置"} />
        }
      >
        <Active />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-52">
        {/* Mode — a segmented switch rather than three menu rows. Plain buttons
            (not menu items) so picking a mode never closes the menu. */}
        <div className="flex items-center justify-between gap-3 px-1.5 py-1">
          <span className="text-sm">{labels?.title ?? "主题"}</span>
          <div
            role="group"
            aria-label={labels?.title ?? "主题"}
            className="flex items-center gap-0.5 rounded-md bg-muted p-0.5"
          >
            {modes.map((option) => {
              const active = mode === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  title={option.label}
                  aria-label={option.label}
                  aria-pressed={active}
                  onClick={() => setMode(option.value)}
                  className={cn(
                    "flex size-6 cursor-default items-center justify-center rounded-[calc(var(--radius)-6px)] transition-colors outline-none",
                    active
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <option.icon className="size-3.5" />
                </button>
              );
            })}
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Palette — stays open on selection so the change is visible. */}
        <DropdownMenuRadioGroup
          value={style}
          onValueChange={(value) => setStyle(value as ThemeStyle)}
        >
          {styles.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value} closeOnClick={false}>
              <option.icon />
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
