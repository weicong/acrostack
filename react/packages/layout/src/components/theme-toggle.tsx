import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";

import { useTheme, type Theme } from "#hooks/use-theme";

export type ThemeToggleProps = {
  /** Override the visible copy (i18n). Defaults are Simplified Chinese. */
  labels?: {
    trigger?: string;
    light?: string;
    dark?: string;
    system?: string;
  };
};

export function ThemeToggle({ labels }: ThemeToggleProps = {}) {
  const { theme, setTheme } = useTheme();

  const options: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: "light", label: labels?.light ?? "浅色", icon: Sun },
    { value: "dark", label: labels?.dark ?? "深色", icon: Moon },
    { value: "system", label: labels?.system ?? "跟随系统", icon: Monitor },
  ];

  const Active = options.find((option) => option.value === theme)?.icon ?? Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label={labels?.trigger ?? "切换主题"} />
        }
      >
        <Active />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setTheme(option.value)}
            className="gap-2"
          >
            <option.icon />
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
