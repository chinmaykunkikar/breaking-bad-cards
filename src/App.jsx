import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import Quote from './components/ui/Quote'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const characters = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(characters.data)
      setLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Quote isLoading={isLoading} />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
