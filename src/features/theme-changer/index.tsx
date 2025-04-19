import { useTheme } from "@/context/theme-provider";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <DarkModeSwitch
      checked={theme === "dark"}
      onChange={toggleDarkMode}
      size={24}
    />
  );
};
