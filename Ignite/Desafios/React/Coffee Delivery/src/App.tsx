import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
