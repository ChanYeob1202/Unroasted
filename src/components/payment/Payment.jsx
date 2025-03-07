import React, {useState} from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

export default function Payment() {
  return (
    <div>
      
    </div>
  )
}
