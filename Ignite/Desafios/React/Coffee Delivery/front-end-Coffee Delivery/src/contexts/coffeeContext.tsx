import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface CoffeeProps {
  id: number
  title: string
  subtitle: string
  subtitle2: string
  name: string
  text: string
  price: number
  img_path: string
}

export interface CoffeeCartProps {
  coffee_id: number
  user_id: number
  name: string
  amount: number
  price: number
  img_path: string
}

interface CoffeeContextType {
  coffees: CoffeeProps[]
  coffeesCart: CoffeeCartProps[]
}

interface CoffeeProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffee] = useState<CoffeeProps[]>([])
  const [coffeesCart, setCoffeesCart] = useState<CoffeeCartProps[]>([])

  async function loadCoffee() {
    const response = await api.get('coffee')

    setCoffee(response.data)
  }

  async function loadCoffeeCart() {
    const response = await api.get('cart')

    setCoffeesCart(response.data)
  }

  useEffect(() => {
    loadCoffee()
    loadCoffeeCart()
  }, [])

  return (
    <CoffeeContext.Provider value={{ coffees, coffeesCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
