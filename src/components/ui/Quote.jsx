import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Quote = ( {isLoading} ) => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    const fetchQuote = async () => {
      const randomQuote = await axios(
        `https://www.breakingbadapi.com/api/quote/random`
      )
      setQuote(randomQuote.data[0].quote)
      setAuthor(randomQuote.data[0].author)
    }
    fetchQuote()
  }, [])
  return isLoading ? <div></div> : (
    <figure className='quote'>
      <blockquote>{quote}</blockquote>
      <figcaption className='author'>
        &mdash; <cite>{author}</cite>
      </figcaption>
    </figure>
  )
}

export default Quote
