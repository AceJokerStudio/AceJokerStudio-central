import React, { useEffect } from 'react';
import s from '@/styles/sass/Software.module.scss';
import Link from 'next/link';
import { GrFormNextLink } from 'react-icons/gr';


const Software = ({ application, news }) => {
   //standard

   //state

   //function
   useEffect(() => {
      console.log(news);
   }, []);


   return (
      <div className={` ${s['container']} `} >



         <section className={` ${s['section2']} `} >

            <h1>Applications Published</h1>
            <div className={` ${s['application-cont']} `} >


               {
                  application?.map((app, index) => (

                     <div key={app.title + index}>


                        <h3 >{
                           app.title
                        }</h3>
                        <p>{
                           `${app?.description?.substring(0, 100)}...`
                        }</p>

                        <p>{
                           app.type
                        }</p>

                        <Link href={`/softwares/${app.title}`}><button><GrFormNextLink size={24} /></button></Link>

                     </div>

                  )
                  )
               }
            </div>

         </section>

         <section className={` ${s['section3']} `} >
            <h1>Privacy Policies</h1>

            <div className={` ${s['privacypolicies-cont']} `} >


               {
                  application?.map((app, index) => (

                     <div key={app.title + index}>


                        <h3 >{
                           app.title
                        }</h3>


                        <Link href={`/softwares/privacypolicy/${app.title}`}><button><GrFormNextLink size={24} /></button></Link>

                     </div>

                  )
                  )
               }

            </div>

         </section>



         <section className={` ${s['section1']} `} >
            <h1>Latest Release News</h1>
            <div className={` ${s['newscontent']} `} >
               {
                  news?.map((item, index) => (

                     <div key={item.title + index}>
                        <h3>{
                           item?.title
                        }</h3>

                        <p>{
                           item?.content
                        }</p>

                        <p className={`${s['date']}`}>{
                           `Published Date: ${item?.date}`
                        }</p>
                     </div>

                  ))
               }
            </div>

         </section>
         <section className={` ${s['section4']} `} >

         </section>

      </div>

   )
}


export default Software;