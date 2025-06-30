import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams() 
  return (
    <div className='bg-gray-500 text-white p-3 text-2xl'>User : {userId}</div>
  )
}

export default User