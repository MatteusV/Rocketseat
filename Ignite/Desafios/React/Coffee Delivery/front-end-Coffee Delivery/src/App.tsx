import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { DefaultTheme } from './styles/themes/default'
import { CoffeeProvider } from './contexts/coffeeContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
