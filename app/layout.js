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
        <main>
           <Navbar/>
          {children}
        </main>
        <div>footer</div>
      </body>
    </head>
  )
 }
