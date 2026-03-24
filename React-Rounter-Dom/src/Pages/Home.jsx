import React from 'react'

const Home = () => {
  return (
    <>
    <section className='flex items-center justify-center h-screen w-full flex-col gap-y-2'>
        <h1 className='text-9xl font-bold'>Home Page</h1>
        <h1>Steps:</h1>
        <p>1. Install React Router Dom</p>
        <p>2. Main.jsx == Wrap App With BroeserRouter</p>
        <p>3. App.jsx == Wrap All Router With Routes</p>
        <p>4. App.jsx == Create a Router For All Pages</p>
        <p>5. Convert All a tag == Link</p>
        <p>6. Convert All href == to</p>
    </section>
    </>
  )
}

export default Home