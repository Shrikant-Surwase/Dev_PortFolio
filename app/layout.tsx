'use client'


import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'
import './globals.css'
interface Props {
  session: Session | null
  children: React.ReactNode
}

 const RootLayout: React.FC <Props> = ({ children, session } ) => {
  return (
    <html lang="en">

      <head />
      <body>
        {/* SessionProvider ile sarmallarız ki tüm route lara erişebilelim diye / yukarıda "use client" tanımlamayı unutma! */}
        <SessionProvider session={session}>
          {children}
        </SessionProvider>        
      </body>
    </html>
  )
}

export default RootLayout
