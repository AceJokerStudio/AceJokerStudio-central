import React from 'react'
import Software from './../../styles/container/Software';

import { getApplicationData } from '@lib/mongo/application';
import { getNewsData } from '@lib/mongo/news';

export async function getStaticProps() {

   let application = await getApplicationData();
   let news = await getNewsData();

   return {
      props: {
         application,
         news
      },
      // every 9min revalidate
      revalidate: 540
   }
}


const index = ({ application, news }) => {
   //standard

   //state

   //function


   return (
      <>
         <Software application={application} news={news} />
      </>
   )
}


export default index;