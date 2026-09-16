const tintColorLight = "#0284C7";
const tintColorDark = "#38BDF8";
const primary = "#0284C7";   // Smooth Slate Blue (Soothing & easy on the eyes)
const secondary = "#0F172A"; // Rich Dark Slate Navy (Clean header/tab background)

export const Colors = {
  light: {
    text: "#0F172A",
    background: "#F8FAFC",
    tint: tintColorLight,
    icon: "#64748B",
    tabIconDefault: "#94A3B8",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#94A3B8",         // Soft Muted Slate Gray (Perfect for inactive tabs)
    background: "#0F172A",
    tint: tintColorDark,
    icon: "#94A3B8",
    tabIconDefault: "#64748B",
    tabIconSelected: tintColorDark,
  },
  PRIMARY: primary,
  SECONDARY: secondary,
};