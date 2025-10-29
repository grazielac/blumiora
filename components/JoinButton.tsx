import { SignUpButton } from '@clerk/nextjs'
import React from 'react'

function JoinButton() {
  return (
    <div>
      <SignUpButton>
      <button className='shadow-md bg-primary font-bold text-white rounded-full px-4 py-4 hover:bg-accentGray hover:text-text text-sm'>JOIN BLUMIORA</button>
      </SignUpButton>
    </div>
  )
}

export default JoinButton
