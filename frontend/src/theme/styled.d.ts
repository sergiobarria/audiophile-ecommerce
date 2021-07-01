import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    primary: string;
    primaryLight: string;
    darkerGrey: string;
    darkGrey: string;
    lightGrey: string;
    lightestGrey: string;
    white: string;
    black: string;
  }
}
