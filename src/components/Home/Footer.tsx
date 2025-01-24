import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='h-[5%]  w-full text-white flex items-center justify-center'>
     Dragon Dice @ {year}
    </div>
  )
}

export default Footer
