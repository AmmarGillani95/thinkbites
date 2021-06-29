const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#102344",
        salmon: "#E6A490",
        darkNavy: "#0C1C36",
      },
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.darkNavy"),
              "&:hover": {
                color: theme("colors.darkNavy"),
                cursor: "pointer",
              },
            },
            blockquote: {
              color: theme('colors.navy'),
              borderLeftColor: theme('colors.salmon'),
             
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.gray.300"),
              "&:hover": {
                color: theme("colors.salmon"),
                cursor: "pointer",
              },
            },

            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },

            strong: {
              color: theme("colors.salmon"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            figcaption: {
              color: theme("colors.gray.500"),
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.salmon'),
             
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
