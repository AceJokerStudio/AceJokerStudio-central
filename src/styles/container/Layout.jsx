import React from 'react'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';


const Layout = ({ children }) => {
   //standard

   //state

   //function


   return (
      <>
         <nav>
            <Navbar />
         </nav>

         <main>
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