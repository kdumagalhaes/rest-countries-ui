import 'styled-components'
import { darkTheme, lightTheme } from '../styles/themes/themes'

// lightTheme or darkTheme has the same properties, so I chose lighTheme randomnly to get its types.
type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
