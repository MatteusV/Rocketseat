import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Checkout } from './pages/Checkout'
import { CheckoutFilled } from './pages/Checkout Filled'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutfilled" element={<CheckoutFilled />} />
      </Route>
    </Routes>
  )
}
