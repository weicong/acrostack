import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import {
  Checkmark16Filled,
  CircleHalfFill20Regular,
  WeatherMoon20Regular,
  WeatherSunny20Regular,
} from "@fluentui/react-icons";
import { useThemeMode, type ThemeMode } from "@/lib/theme/ThemeProvider";

interface ThemeOption {
  value: ThemeMode;
  label: string;
  icon: typeof WeatherSunny20Regular;
}

const OPTIONS: ThemeOption[] = [
  { value: "light", label: "浅色", icon: WeatherSunny20Regular },
  { value: "dark", label: "深色", icon: WeatherMoon20Regular },
  { value: "system", label: "跟随系统", icon: CircleHalfFill20Regular },
];

/**
 * 外观切换：浅色 / 深色 / 跟随系统。
 * 当前选择在菜单里以勾选图标标示，触发按钮的图标反映实际生效的外观。
 */
export function ThemeSwitcher() {
  const { mode, resolvedMode, setMode } = useThemeMode();
  const active = OPTIONS.find((option) => option.value === mode) ?? OPTIONS[2];
  const TriggerIcon = resolvedMode === "dark" ? WeatherMoon20Regular : WeatherSunny20Regular;

  return (
    <Menu>
      <MenuTrigger>
        <Button appearance="subtle" icon={<TriggerIcon />} aria-label={`外观：${active.label}`} />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {OPTIONS.map((option) => {
            const Icon = option.icon;
            return (
              <MenuItem
                key={option.value}
                icon={<Icon />}
                secondaryContent={mode === option.value ? <Checkmark16Filled /> : undefined}
                onClick={() => setMode(option.value)}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
