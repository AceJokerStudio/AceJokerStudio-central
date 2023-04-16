import React from 'react'
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
               <p>We build critical technological softwares that helps people and business excel with ease and helps them get one step closer to their goals.</p>
            </section>
            <section className={` ${s['section3']} `} >
            </section>
            <section className={` ${s['section4']} `} >
            </section>

         </div>

      </>
   )
}


export default Home;