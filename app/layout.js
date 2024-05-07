import './css/globals.scss'
import {Inter} from 'next/font/google'
import Navbar from './components/Navbar'
export const metadata={
  title:'Portfolio of Shrikant Surwase'
};
const inter=Inter({subsets:['latin']})
 export default function RootLayout({children}){
  return(
    <head>
      <body className={inter.className}>
        <main className='max-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] max-w-[76rem] 2xl:max-w-[92rem]'>
           <Navbar/>
          {children}
        </main>
        <div>footerr  </div>
      </body> 
    </head>
  )
 }
