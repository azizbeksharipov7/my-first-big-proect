import React, { useState } from 'react'
import HeaderTop from './header-top'
import HeaderNav from './header-nav'


export const Header = () => {
  
  return (
    <header className='mt-6'>
      <div className="container">
      <HeaderTop/>
      <HeaderNav/>
      </div>
    </header>
  )
}

export default Header;