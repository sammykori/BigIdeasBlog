import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { logo, menu, close } from '@/public/assets'
import { styles } from '@/utils/styles'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full bg-primary flex items-center py-4 fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link href="/" className="flex items-center gap-2 cursor-pointer" 
        onClick={()=>{
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <Image src={logo} className='w-8 h-8 object-contain' alt='logo' />
          <p className='font-bold cursor-pointer'>Sammy<span>Kori</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active === link.title? "text-white": "text-secondary"} hover:text-white font-medium cursor-pointer`} onClick={()=>{setActive(link.title)}}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
          
        </ul>
        <div className='sm:hidden flex flex-1 items-center justify-end'>
            <Image src={toggle?close:menu} alt="menu" className='w-4 h-4 object-contain cursor-pointer' onClick={()=>{setToggle(!toggle)}}  />
            <div className={`${!toggle? 'hidden': 'flex'} p-6 bg-white absolute top-10 right-0 z-10 my-2 mx-2 min-w-[140px] rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-2'>
                {navLinks.map((link)=>(
                  <li key={link.id} className={`${active === link.title? "text-white": "text-red-900"} hover:text-white text-sm font-medium cursor-pointer`} onClick={()=>{
                    setActive(link.title)
                    setToggle(!toggle)
                    }}>
                    <Link href={`#${link.id}`}>{link.title}</Link>
                  </li>
                ))}
                
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar