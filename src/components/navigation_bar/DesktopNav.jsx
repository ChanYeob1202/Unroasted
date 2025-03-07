import React from 'react'
import NavBarList from '../layouts/NavBarList'
import AuthButton from '../layouts/AuthButton'

export default function DesktopNav({ navItems, user, onLogOut }) {
  return (
    <div className='w-full hidden lg:flex flex-flow justify-end items-center space-x-6'>
      {navItems.map((item, index) => (
        <NavBarList key={index} {...item} />
      ))}
      <AuthButton user={user} onLogOut={onLogOut} />
    </div>
  )
}