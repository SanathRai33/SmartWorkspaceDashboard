import React from 'react'

const Header = ({title, description}: any) => {
  return (
    <section className='px-2 py-4 max-w-7xl'>
      <h1 className='text-4xl font-bold text-black'>{title}</h1>
      <p className='text-gray-700'>{description}</p>
    </section>
  )
}

export default Header