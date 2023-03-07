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

export interface AddressProps {
  id: number
  city: string
  uf: string
  number: number
  type: 'credit card' | 'debit card' | 'money'
  road: string
  zipCode: number
  complement: string
  neighbohood: string
  user_id: number
}

interface CoffeeContextType {
  coffees: CoffeeProps[]
  coffeesCart: CoffeeCartProps[]
  address: AddressProps[]
}

interface CoffeeProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffees, setCoffee] = useState<CoffeeProps[]>([])
  const [coffeesCart, setCoffeesCart] = useState<CoffeeCartProps[]>([])
  const [address, setAdress] = useState<AddressProps[]>([])

  const id = localStorage.getItem('id_user')

  async function loadCoffee() {
    const response = await api.get('coffee')

    setCoffee(response.data)
  }

  async function loadCoffeeCart() {
    const response = await api.get('cart')

    setCoffeesCart(response.data)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadAddress() {
    const response = await api.get(`address/${id}`)

    setAdress(response.data)
  }

  useEffect(() => {
    loadCoffee()
    loadCoffeeCart()
    loadAddress()
  }, [loadAddress])

  return (
    <CoffeeContext.Provider value={{ coffees, coffeesCart, address }}>
      {children}
    </CoffeeContext.Provider>
  )
}
