import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './Routes'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

export default function App() {
  const { value } = useDarkMode(false)
  const theme = value ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}
