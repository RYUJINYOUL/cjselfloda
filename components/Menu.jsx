"use client"
import React, { useRef } from "react"
// import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";
import useUIState2 from "@/hooks/useUIState2";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'



export default function Menu(props) {
  const { push } = useRouter();
  const pathname = usePathname()
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();
  let total = props
  const homeCategoryList = [
    {
      label: "홈",
      src: "/",
    },
    {
      label: "시설안내",
      src: "/dastory",
    },
    {
      label: "게시판",
      src: "/ta",
    },
  ];

 

  const onClickCategory = (item) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory(item.label);
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
      push(item.src, {scroll: false})
    }
  };

  useEffect(() => {
     if(pathname === "/") {
      setHomeCategory("홈");
    } 
     if (pathname === "/dastory") {
      setHomeCategory("시설안내");
    }  
     if (pathname === "/ta") {
      setHomeCategory("게시판");
    
    }  
    slideRight()
}, [pathname]);





const slideRight = () => {
  var slider = document.getElementById('nav');
};
  
  return (
    <nav id="nav" className="md:m-0 ml-5 w-full+10 flex gap-3 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "h-[55px] md:text-[16px] text-[15px] md:text-white text-[#ffffff80] min-w-fit px-2 flex justify-center items-center hover:bg-gray-100",
            total.total&&"md:text-black text-[#ffffff80]",
          item.label === homeCategory &&"underline underline-offset-8 text-white",
          pathname !=="/"&&"md:text-black"
          )}
        >
            {item.label}
        </div>
        
      );
    })}
  </nav>
  )
}


