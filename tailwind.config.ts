import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#13D975",   // blue-600
        // secondary: "#9333ea", // purple-600
        // accent: "#f59e0b",    // amber-500
        whiteVariation: "#E6E6E6",
        backgroundDark1: "#171C19"
      },
    },
  },
};

export default config;