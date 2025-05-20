"use client"
import React, { useEffect, useState, useRef } from 'react'
import Logo from './elements/Logo'
import Menu from '@/components/Menu'
import Menu2 from '@/components/Menu2'
import Navigator from './elements/Navigator'
import PagePadding from './PagePadding'
import useUIState from "@/hooks/useUIState";
import Gallery from '@/components/Gallery3'
import { usePathname } from 'next/navigation'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils";





const HeaderDrawer = ({ children }) => {
  return (<Drawer direction='left'>
  <DrawerTrigger>{children}</DrawerTrigger>
  <DrawerContent className='w-[320px] h-full'>
  <nav className='w-[320px] h-full border-r-[1px] border-neutral-600 '>
        <div className='p-[24px]'><Logo total={true}/></div>
        <div className='bg-[#000000] h-full'><Navigator /></div>
      </nav>
  </DrawerContent>
</Drawer>
  );
}



const Header2 = ({children}) => {
   const pathname = usePathname()
   const [isScrolled, setIsScrolled] = useState(false);
   const { homeCategory, setHomeCategory, headerImageSrc, setHeaderImageSrc } = useUIState();
   const headRef = useRef();


   useEffect(() => {
      const handleScroll = () => {
        const scrollValue = headRef?.current?.scrollTop;
        // console.log("-->scrollValue", scrollValue);
        setIsScrolled(scrollValue !== 0);
      };
  
      headRef?.current?.addEventListener("scroll", handleScroll);
      return () => {
        headRef?.current?.removeEventListener("scroll", handleScroll);
      }
    }, []);




  return (
    <header ref={headRef} className="overflow-y-auto w-full h-full">
      
     <section className="relative top-0 w-full">
        <div className={cn('block sticky top-100 w-full', pathname !=="/"&&"hidden" )}><Gallery/></div>
      </section>

       <PagePadding>  
   <section className={cn('absolute w-full top-0 left-0 flex h-[55px] z-10 items-start md:justify-center sm:justify-between', 
    isScrolled&&pathname ==="/"&&"md:bg-white bg-[#000000]", 
    pathname !=="/"&&"md:bg-white bg-[#000000]"
    )}>
      
   <div className='flex flex-col'>
      <div className='md:absolute sm:absolute lg:relative w-full'>
          <section className='flex flex-row lg:w-[1100px] w-full items-center h-[55px] md:justify-start sm:justify-between'>
            <HeaderDrawer>
              <article className='lg:hidden ml-2 sm:pr-10'>
            <GiHamburgerMenu className={"md:text-black text-white"} size={30} />
              </article>
              </HeaderDrawer>
            <div className='lg:block hidden ml-2 sm:pr-10'>
              <Logo total={isScrolled}/>
            </div>  

            <article className='ml-[60px]'>
            <Menu total={isScrolled} />
            </article>
        </section>
     </div> 

   

   {/* <div className='md:pt-1 mt-1 bg-[#fafafa]' /> */}

  
   </div>
   </section>
  </PagePadding>
 <section>{children}</section>

</header>
  )
}

export default Header2

