import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFB800",
          dark: "#F59E0B",
          light: "#FFF3D4",
        },
        surface: {
          DEFAULT: "#FFFAF0",
          light: "#FFF3D4",
          dark: "#D97706",
        },
        // Text colors
        content: {
          DEFAULT: "#44403C",
          muted: "#78716C",
        },
        // Accent colors
        accent: {
          blue: "#0EA5E9",
          teal: "#0D9488",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // primary: {
        // 	DEFAULT: 'hsl(var(--primary))',
        // 	foreground: 'hsl(var(--primary-foreground))'
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
             loading: {
       '0%': { width: '0%' },
       '50%': { width: '70%' },
       '100%': { width: '100%' }
     },
          progress: {
       '0%': { width: '0%' },
       '100%': { width: '100%' }
     },
     leg: {
       '0%': { transform: 'rotate(30deg)' },
       '100%': { transform: 'rotate(-30deg)' }
     },
     fly: {
      '0%': { transform: 'translate(-50%, -50%) rotate(0deg) translateX(40px)' },
      '50%': { transform: 'translate(-50%, -50%) rotate(180deg) translateX(40px)' },
      '100%': { transform: 'translate(-50%, -50%) rotate(360deg) translateX(40px)' }
    }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        ticker: "ticker 20s linear infinite",
         'loading-bar': 'loading 1.5s ease-in-out infinite',
              'expedition-progress': 'progress 2s linear',
     'leg': 'leg 0.6s infinite alternate',
     'leg-alt': 'leg 0.6s infinite alternate-reverse',
     fly: 'fly 2s ease-in-out infinite'


      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
