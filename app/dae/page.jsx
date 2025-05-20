"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { HiPhone } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import Footer from '@/components/Footer';
import Mapping from '@/components/Mapping';
import useUIState from "@/hooks/useUIState";
import Gallery from '@/components/Gallery';

const page = () => {
    let slides = [
      "/Image/minichu.jpeg",
      "/Image/minipocre.jpeg",
      "/Image/3.5.2.5.jpeg",
      "/Image/main1.jpeg",
      "/Image/trector.jpeg",
       "/Image/main2.jpeg",
        "/Image/main3.jpeg", 
    "/Image/main5.jpeg", 
    "/Image/main6.jpeg", 
    "/Image/main7.jpeg", 
    "/Image/main8.jpeg", 
    "/Image/main9.jpeg",
    "/Image/main10.jpeg",
    "/Image/main11.jpeg",
   ]
 

return (
    <div className='w-screen bg-[#000000C9] h-screen flex items-center justify-center'>
      <Gallery images={slides} />
   </div>
   
 )
}

export default page;