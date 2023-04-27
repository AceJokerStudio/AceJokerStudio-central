import React from 'react'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


import s from './../sass/Layout.module.scss';

const Layout = ({ children }) => {
   //standard

   //state

   //function


   return (
      <>
         <nav className={` ${s['navigation-container']} `} >
            <Navbar />

         </nav>


         <main className={` ${s['main']} `} >
            {
               children
            }
         </main>


         <footer>
            <Footer />
         </footer>
      </>
   )
}


export default Layout;