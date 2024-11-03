import { theme } from "./Theme"; // styled.d.ts

export type ThemeStyled  = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeStyled {}
}
