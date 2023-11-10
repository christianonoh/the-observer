"use client"

import { navItems } from '@/constants'
import Logo from '@/public/images/logo.svg'
import styles from '@/styles'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { menuVariant, slideIn } from '@/utils/motion'
import { Divide as Hamburger } from 'hamburger-react'

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  
  const handleToggle = (toggleDropdown: boolean) => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.overflow = toggleDropdown ? 'auto' : 'hidden';
      mainElement.style.pointerEvents = toggleDropdown ? 'auto' : 'none';
    }
  }
  return (
    <header
      className={`${styles.xPaddings} max-w-7xl md:py-8 py-3 mx-auto relative border-b border-gray-200`}
    >
      <nav className={`flex items-center justify-between`}>
        <Link href='/'>
          <Image 
            src={Logo} 
            alt="The Observer"
            className='cursor-pointer h-9'
          />
        </Link>

        {/* Desktop Navigation  */}
        <div className='hidden gap-6 sm:flex md:gap-10'>
          {navItems.map((nav) => (
            <Link key={nav.title} href={nav.path}>
              {nav.title}
            </Link>
          ))}
        </div>

        <div className='hidden sm:flex'>
          <button className={`${styles.blackBtn}`}>
            Sign in
          </button>
        </div>

        {/* Mobile Navigation  */}
        <div className='flex items-center sm:hidden'>
          <Hamburger 
            toggle={setToggleDropdown} 
            toggled={toggleDropdown} 
            size={30}
            label='menu'
            onToggle={handleToggle}
            duration={0.7}
          />
          <AnimatePresence>
          {toggleDropdown && (
          <motion.div
            variants={menuVariant(0.5)}
            initial='hidden'
            animate='show'
            exit='exit'
            className='fixed bottom-0 right-0 z-0 items-center w-2/3 font-bold text-gray-800 origin-right mobile_nav_container top-68 top bg-primary'
            >
            <div className={`${styles.flexCenter} flex-col h-full md:gap-10 gap-6`}>
              {navItems.map((nav, index) => (
                  <motion.div
                    key={nav.title}
                    variants={slideIn('right', 'tween', 0.1, 0.25*(index+1))}
                    initial='hidden'
                    animate='show'
                    viewport={{ once: false, amount: 0.25 }}
                    className='w-full text-4xl text-center cursor-pointer hover:text-slate-200'
                  >
                    <Link href={nav.path}>
                      {nav.title}
                    </Link>
                  </motion.div>
              ))}
            </div>
          </motion.div>
          )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

export default Header
