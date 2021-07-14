import { DefaultTheme } from "styled-components";

const sizes = {
  md: "1.0em",
  lg: "1.2em",
};

export const theme: DefaultTheme = {
  badge: {
    primary: {
      color: "#ffffff",
      backgroundColor: "#807182",
    },
    secondary: {
      color: "#ffffff",
      backgroundColor: "#d8aa96",
    },
  },
  button: {
    backgroundColor: "#f7b1ab",
  },
  text: {
    color: "#4c4947",
    size: sizes.md,
  },
  borders: {
    primary: "#d8aa96",
  },
};
