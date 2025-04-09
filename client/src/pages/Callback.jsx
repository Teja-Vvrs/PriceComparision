import React from 'react'

const Callback = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold underline text-slate-500'>
            Callback Page
        </h1>
        <p className='color-green'>This is the callback page for authentication.</p>
        <p className='color-green'>You can add your authentication logic here.</p>
        <p className='color-green'>This page will be called after authentication.</p>
        <p className='color-green'>You can redirect the user to the home page or any other page.</p>
    </div>
  )
}

export default Callback