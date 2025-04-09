import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarList({link, listName, className}) {
  return (
    <Link 
      to={link} 
      className={`hover:text-[#9e7d79] cursor-pointer font-light text-sm text-nowrap ${className || ''}`}
    >
      {listName}
    </Link>
  )
}