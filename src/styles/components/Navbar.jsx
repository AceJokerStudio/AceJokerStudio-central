import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import s from '@/styles/sass/comps/Navbar.module.scss'

const Navbar = () => {
   //standard

   //state

   //function


   return (
      <>
         <div className={` ${s['container']} `} >
            <div className={` ${s['logo']} `} >
               <Link href={'/'}> <Image

                  src={'/AJS.png'}
                  alt='logo'
                  width={60}
                  height={60}
                  priority={true}
               /></Link>

               <div className={` ${s['title-container']} `} >
                  <h1>AceJoker Studio</h1>
               </div>

            </div>

            <div className={` ${s['navigation']} `} >
               <Link href={'/about-us'}><button><p>About</p></button></Link>
               <Link href={'/softwares'}><button><p>Softwares</p></button></Link>
               <Link href={'/services'}><button><p>Services</p></button></Link>
            </div>


         </div>

      </>
   )
}


export default Navbar;