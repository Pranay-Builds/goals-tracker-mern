import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center mt-3'>
        <h1 className='text-5xl font-bold text-red-500'>404 Not Found</h1>
        <p className='text-2xl text-gray-500'>Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound