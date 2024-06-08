import React from 'react'

const Button = ({styles}) =>  (
    <button
    type='button'
    className={`bg-blue-gradient py-4 px-4 rounded-md font-poppins text-[18px] outline-none font-medium text-primary ${styles}   hover:scale-[1.3]  transition-all ease-in duration-300`}>
      Get Started
    </button>
  )


export default Button