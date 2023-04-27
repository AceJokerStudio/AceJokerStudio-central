import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s from '@/styles/sass/Home.module.scss'

const Home = () => {
   //standard

   //state

   //function


   return (
      <>
         <div className={` ${s['container']} `} >
            <section className={` ${s['section1']} `} >
               <h1>STREAMLINE</h1>
               <h1>INNOVATE</h1>
               <h1>PROVIDE</h1>
            </section>
            <section className={` ${s['section2']} `} >
               <p className={` ${s['text']} `}>We build critical technological softwares that helps people and business excel with ease and helps them get one step closer to their goals.</p>

               <div className={` ${s['application path']} `} >
                  <Link href={'/softwares'}><button className={` ${s['btn-grad']} `}><p>Our Applications</p></button></Link>
               </div>

            </section>
            <section className={` ${s['section3']} `} >
               <div className={` ${s['image-container']} `} >
                  <Image
                     className={` ${s['nextimg']} `}
                     src={'/images/charts.png'}
                     alt="charts"
                     width="874"
                     height="1024"

                  />
               </div>

               <p className={` ${s['text']} `}>Helping those in need of growth and accelerating communities. </p>

               <div className={` ${s['application-path']} `} >
                  <Link href={'/services'}><button className={` ${s['btn-grad']} `}><p>Our Services</p></button></Link>
               </div>
            </section>



            <section className={` ${s['section4']} `} >
               <div className={` ${s['image-container']} `} >
                  <Image
                     className={` ${s['nextimg']} `}
                     src={'/images/eifeltower.png'}
                     alt="charts"
                     width="874"
                     height="1024"

                  />
               </div>

               <p className={` ${s['text']} `}>Grow with us through our parent company AceJoker Capital Inc. </p>

               <div className={` ${s['application-path']} `} >
                  <a href={'https://www.acejokercapital.com'} target='_blank' ><button className={` ${s['btn-grad']} `}><p>AceJoker Capital</p></button></a>
               </div>
            </section>

         </div>

      </>
   )
}


export default Home;