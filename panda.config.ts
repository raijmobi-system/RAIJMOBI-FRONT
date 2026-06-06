// import { defineConfig } from "@pandacss/dev";

// export default defineConfig({
//   // Whether to use css reset
//   preflight: true,

//   // Where to look for your css declarations
//   include: ["./src/**/*.{js,jsx,ts,tsx}",
//      "./pages/**/*.{js,jsx,ts,tsx}",
//      "./components/**/*.{js,jsx,ts,tsx}"],

//   // Files to exclude
//   exclude: [],

//   // Useful for theme customization
//   theme: {
//     extend: {},
//   },

//   // The output directory for your css system
//   outdir: "styled-system",
// });



import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { dark: { value: "#262626" }, green: { value: "#547812" } },
          primary: { value: "#3f5e00" },
          primaryContainer: { value: "#547812" },
          onPrimaryContainer: { value: "#d4ff8f" },
          surface: { value: "#fbf9f9" },
          surfaceContainer: { value: "#efeded" },
          onBackground: { value: "#1b1c1c" },
          error: { value: "#ba1a1a" },
          errorContainer: { value: "#ffdad6" },
          outline: { value: "#747968" },
          outlineVariant: { value: "#c4c9b5" },
        },
        fonts: {
          heading: { value: "Hanken Grotesk, sans-serif" },
          body: { value: "Manrope, sans-serif" },
        },
        fontSizes: {
          displayLg: { value: "36px" },
          headlineLg: { value: "28px" },
          headlineMd: { value: "22px" },
          titleLg: { value: "18px" },
          bodyLg: { value: "16px" },
          bodyMd: { value: "14px" },
          labelLg: { value: "13px" },
        },
        radii: {
          xl: { value: "0.75rem" },
          "2xl": { value: "1rem" },
          "3xl": { value: "1.25rem" },
          full: { value: "9999px" },
        },
      },
    },
  },
  outdir: "styled-system",
});