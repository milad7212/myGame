import Image from 'next/image'
// import Brand_sidebar_with_header from './components/tailwind/application-ui/application-shells/sidebar/dark_sidebar_with_header'
import Brand_sidebar from './components/tailwind/application-ui/application-shells/sidebar/Brand_sidebar'
import Dark_sidebar_with_header from './components/tailwind/application-ui/application-shells/sidebar/Dark_sidebar_with_header'
export default function Home() {
  return (
   <div className="">
    {/* <Brand_sidebar_with_header/> */}
    {/* <Brand_sidebar/> */}
    <Dark_sidebar_with_header/>
   </div>
  )
}
