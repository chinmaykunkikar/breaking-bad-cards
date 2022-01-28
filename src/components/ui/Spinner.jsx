import React from 'react'
import spinner from '../../../public/spinner.svg'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ margin: 'auto', display: 'block' }}
      alt='Loading'></img>
  )
}

export default Spinner
