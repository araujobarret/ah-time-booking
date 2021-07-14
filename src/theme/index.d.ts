import "styled-components";

/**
 * Overrides the default theme properties with out custom theme properties.
 * For more information please read:
 *
 * https://styled-components.com/docs/api#typescript
 */
declare module "styled-components" {
  export interface DefaultTheme {
    badge: {
      primary: {
        backgroundColor: string;
        color: string;
      };
      secondary: {
        backgroundColor: string;
        color: string;
      };
    };
    button: {
      backgroundColor: string;
    };
    text: {
      color: string;
      size: string;
    };
    borders: {
      primary: string;
    };
  }
}
