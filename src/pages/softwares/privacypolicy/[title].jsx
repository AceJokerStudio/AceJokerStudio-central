import React, { useEffect } from 'react'
import s from '@/styles/sass/PrivacyPolicy.module.scss';
import { IoMdArrowBack } from 'react-icons/io'
import Link from 'next/link';


import { getApplicationPrivacyPolicy, getApplicationTitles } from '@lib/mongo/application';


export async function getStaticPaths() {

   const data = await getApplicationTitles();
   const paths = data.map((item) => {

      return { params: { title: item.title } }

   })

   return {
      paths,
      fallback: false
   }

}

export async function getStaticProps({ params }) {

   const currentApplication = await getApplicationPrivacyPolicy(params.title);

   return {
      props: {
         currentApplication
      },
      // every 9min revalidate
      revalidate: 540
   }

}



const title = ({ currentApplication }) => {
   //standard

   //state

   //function



   return (
      <div>
         <section className={`${s['section1']}`}>
            {
               currentApplication.map((item) => (

                  <pre>{
                     item.privacypolicy
                  } </pre>

               ))
            }
         </section >

         <section className={` ${s['section2']} `} >
            <Link href='/softwares'><button><IoMdArrowBack size={32} /></button></Link>
         </section>

      </div>
   )
}


export default title;