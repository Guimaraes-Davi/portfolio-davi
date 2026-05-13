/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-1": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-2": ["1.75rem", { lineHeight: "1.25", fontWeight: "600" }],
        "display-3": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      maxWidth: {
        container: "1100px",
      },
      spacing: {
        section: "6rem",
        "section-mobile": "4rem",
      },
      transitionDuration: {
        theme: "200ms",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
