import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F5F7",
        foreground: "var(--foreground)",
        primary: "#0061F2",
        "secondary-primary": "#0056D6",
        "hover-blue": "#E2F1FF",
        dark: "#2A2F3B",
        "accent-green": "#48C78E",
        "alert-color": "#F23A55",
        "text": "#333333",
        "border-gray": "#A0A9B3"
      },
    },
  },
  plugins: [],
} satisfies Config;
