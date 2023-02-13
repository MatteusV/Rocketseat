import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface CoffeeProps {
  title: string
  subtitle?: string
  subtitle2?: string
  name: string
  text: string
  price: number
  img: string
}

interface CoffeeContextType {
  coffees: CoffeeProps[]
}

interface CoffeeProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffee] = useState<CoffeeProps[]>([])

  async function loadCoffee() {
    const response = await api.get('coffee')

    setCoffee(response.data)
  }

  useEffect(() => {
    loadCoffee()
  }, [])

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
