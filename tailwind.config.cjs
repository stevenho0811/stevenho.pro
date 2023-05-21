function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    backgroundColor: {
      skin: {
        accent: withOpacity("--color-accent"),
        card: withOpacity("--color-card"),
        "card-muted": withOpacity("--color-card-muted"),
        fill: withOpacity("--color-fill"),
        inverted: withOpacity("--color-text-base"),
        transparent: 'transparent',
      },
    },
    borderColor: {
      skin: {
        accent: withOpacity("--color-accent"),
        fill: withOpacity("--color-text-base"),
        line: withOpacity("--color-border"),
      },
    },
    fill: {
      skin: {
        accent: withOpacity("--color-accent"),
        base: withOpacity("--color-text-base"),
      },
      transparent: "transparent",
    },
    fontFamily: {
      ['sans-serif']: ["Inter", "Noto Sans JP", "Hiragino Sans", "PingFang TC", "Microsoft JhengHei", "微軟正黑體", "sans-serif"],
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    textColor: {
      skin: {
        accent: withOpacity("--color-accent"),
        base: withOpacity("--color-text-base"),
        inverted: withOpacity("--color-fill"),
      },
    },
  },
};
