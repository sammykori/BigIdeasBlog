import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter, Vina_Sans } from 'next/font/google'
import {MoonIcon, SunIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { navLinks } from '@/constants'
import { logo, menu, close, skb, skw, webbed1, webbed2 } from '@/public/assets'
import { styles } from '@/utils/styles'

const inter = Inter({ subsets: ['latin'] })
const vina = Vina_Sans({ subsets: ['latin'], weight: '400'})

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  function activateSearchBar(){
     window.document.getElementById('searchForm').style.display = 'flex';
  }

  function deactivateSearchBar(){
    window.document.getElementById('searchForm').style.display = 'none';
 }
  return (
    <nav className={`${styles.paddingX} w-full bg-primary flex items-center py-4 fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto relative'>
        <Link href="/" className="flex items-center gap-2 cursor-pointer" 
        onClick={()=>{
          setActive("");
          window.scrollTo(0, 0);
        }}>
          {/* <Image src={webbed1} width={100} height={50} className='w-32 h-auto  object-contain' alt='logo' /> */}
          <p className={`font-bold cursor-pointer text-5xl ${vina.className}`}>BIG<span className='text-secondary'>IDEAS</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 navList'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active === link.title? "text-white": "text-secondary"} hover:text-white font-medium cursor-pointer`} onClick={()=>{setActive(link.title)}}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
          
        </ul>
        
        <div className='bg-primary h-10 w-10 absolute rounded-lg right-0 z-10 border searchBar hidden sm:flex' onMouseOver={()=>activateSearchBar()} onMouseLeave={()=>deactivateSearchBar()}>
          <form className='w-full hidden' id='searchForm'>
            <input type="text" placeholder="Search for article" className='w-full h-10 rounded-lg bg-transparent px-4 text-white'/>
          </form>
        </div>
        <MagnifyingGlassIcon className='w-6 h-6 text-white hidden mr-2 sm:flex z-50 ' />
        <div className='sm:hidden flex flex-1 items-center justify-end'>
            <Image src={toggle?close:menu} alt="menu" className='w-4 h-4 object-contain cursor-pointer' onClick={()=>{setToggle(!toggle)}}  />
            <div className={`${!toggle? 'hidden': 'flex'} p-6 bg-white absolute top-10 right-0 z-10 my-2 mx-2 w-full min-w-[140px] rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-2 w-full'>
                {navLinks.map((link)=>(
                  <li key={link.id} className={`${active === link.title? "text-white": "text-red-900"} hover:text-white text-sm font-medium cursor-pointer`} onClick={()=>{
                    setActive(link.title)
                    setToggle(!toggle)
                    }}>
                    <Link href={`#${link.id}`}>{link.title}</Link>
                  </li>
                ))}

                <li className='w-full h-8'>
                <form className='w-full' id='searchForm'>
                  <input type="text" placeholder="Search for article" className='w-full h-8 rounded-lg bg-black px-4 text-white'/>
                </form>
                </li>
                
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar