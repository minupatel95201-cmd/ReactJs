import { Heart, Menu, Search, ShoppingBag, User2, X } from 'lucide-react'
import React, { useState } from 'react'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <section>
        {/* deskop navbar */}
        <nav className='bg-white px-8 py-4 w-full h-auto  hidden md:flex items-center justify-between'>
            {/* Logo */}
            <div className='flex justify-center items-center gap-y-2'>
                <img src="/logo.png" alt="Logo" className='w-20 object-cover'/>
                <h1 className='font-bold text-xl'>Shopping</h1>
            </div>
           {/* Links */}
            <ul className='flex justify-center items-center gap-x-4 text-lg font-normal'>
                <li><a href="">Home</a></li>
                <li><a href="">Collection</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            {/* Icons */}
            <div className='flex items-center justify-center gap-x-6'>
               <Search strokeWidth={1}/>
               <Heart strokeWidth={1}/>
               <ShoppingBag strokeWidth={1}/>
               <User2 strokeWidth={1}/>
            </div>
        </nav>
        {/* Mobile and Tablet */}
        <nav className='bg-white px-8 py-4 w-full h-auto  md:hidden flex items-center justify-between'>
            {/* Logo */}
            <div className='flex justify-center items-center gap-y-2'>
                <img src="/logo1.png" alt="Logo" className='w-20 object-cover'/>
                <h1 className='font-bold text-xl'>Shopping</h1>
            </div>
           
            {/* Icons */}
            <div className='flex items-center justify-center gap-x-6'>
               <Heart strokeWidth={1}/>
               <ShoppingBag strokeWidth={1}/>
               <User2 strokeWidth={1}/>
               <Menu strokeWidth={1} className='active:scale-95 active:text-amber-600'onClick={()=>{setShowMenu(true)}}/>
            </div>
        </nav>

        {/* SideBar Pannel */}
        {showMenu && (
            <section className='relative flex justify-end md:hidden'>
            <div className='w-[70%] z-200 bg-white/25 backdrop-blur-sm h-screen fixed top-0 flex items-center justify-center'>
            <div className='absolute right-4 top-2'>
                <X className='w-7 h-7'strokeWidth={3} onClick={()=>{setShowMenu(false)}}/>
            </div>

            {/* Links */}
                <ul className='flex justify-center items-center gap-y-10 text-3xl font-semibold flex-col'>
                <li><a href="">Home</a></li>
                <li><a href="">Collection</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </div>
        </section>)}
        
    </section>
    </>
  )
}

export default NavBar