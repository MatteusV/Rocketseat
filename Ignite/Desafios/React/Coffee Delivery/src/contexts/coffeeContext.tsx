import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface CoffeeProps {
  id?: number
  title: string
  subtitle?: string
  subtitle2?: string
  name: string
  text: string
  price: number
  img: string
}

export interface CoffeeCartProps {
  id: number
  name: string
  img: string
  price: number
  amount: number
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

  useEffect(() => {
    loadCoffee()
    loadCoffeeCart()
  }, [coffeesCart])

  async function loadCoffeeCart() {
    const response = await api.get('cart')

    setCoffeesCart(response.data)
  }

  return (
    <CoffeeContext.Provider value={{ coffees, coffeesCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
