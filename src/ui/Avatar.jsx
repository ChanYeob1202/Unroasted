import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Avatar(){

  return (
    <div>
      <FontAwesomeIcon icon={faUser} className="text-gray-600" />
    </div>
  )
}
