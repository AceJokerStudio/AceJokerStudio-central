import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import s from '@/styles/sass/comps/Footer.module.scss';

const Footer = () => {
   //standard

   //state

   //function


   return (
      <>
         <div className={` ${s['container']} `} >

            <div className={` ${s['row']} `} >
               <div className={` ${s['section1']} `} >
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
               </div>
               <div className={` ${s['section2']} `} >
                  <div className={` ${s['section2-container']} `} >
                     <div className={` ${s['list']} `} >
                        <ul>
                           <li><h3>Products</h3></li>
                           <li><Link href={'/application/easy-jobs'}>Easy Jobs</Link></li>
                           <li><Link href={'/'}></Link></li>
                           <li><Link href={'/'}></Link></li>
                        </ul>
                     </div>



                     <div className={` ${s['list']} `} >
                        <ul>
                           <li><h3>Explore</h3></li>
                           <li><Link href={'/'}></Link></li>
                           <li><Link href={'/'}></Link></li>
                           <li><Link href={'/'}></Link></li>
                        </ul>
                     </div>

                     <div className={` ${s['list']} `} >
                        <ul>
                           <li><h3>External</h3></li>
                           <li><Link href={'/'}></Link></li>
                           <li><Link href={'/'}></Link></li>
                           <li><Link href={'/'}></Link></li>
                        </ul>
                     </div>

                  </div>

               </div>
            </div>

            <div className={` ${s['section3']} `} >
               <p>©AceJoker Capital and its subsidiary AceJoker Studio 2023</p>
            </div>

         </div>

      </>
   )
}


export default Footer;