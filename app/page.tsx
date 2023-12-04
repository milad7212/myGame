'use client';
import Image from 'next/image'
// import Brand_sidebar_with_header from './components/tailwind/application-ui/application-shells/sidebar/dark_sidebar_with_header'
import Brand_sidebar from './components/tailwind/application-ui/application-shells/sidebar/Brand_sidebar'
import Dark_sidebar_with_header from './components/tailwind/application-ui/application-shells/sidebar/Dark_sidebar_with_header'
import Link from 'next/link'
import {useSession} from 'next-auth/react'
export default function Home() {
  const {status,data:session}=useSession();


  if(status === 'loading') return null
  
  return (
   <div className="">
    {/* <Brand_sidebar_with_header/> */}
    {/* <Brand_sidebar/> */}
    {status=== 'unauthenticated' && <Link href='/api/auth/signin'>
      <p>hiiiiiiiiiiiii</p>
    </Link>}
    {status ==='authenticated' && 
    <div className="">{session.user?.name}</div>
    }
    
    {/* <Dark_sidebar_with_header/> */}
   </div>
  )
}
