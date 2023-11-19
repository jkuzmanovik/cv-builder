'use client'
import Basic from '@/components/modals/Basic'
import BuildModal from '@/components/modals/BuildModal'
import  { useState } from 'react'



const page = () => {
  return (
    <div>
    <div className="p-3 w-2/3 mx-auto container">
      <BuildModal />
      </div>
    </div>
  )
}

export default page