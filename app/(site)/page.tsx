"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { HiPhone } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import Footer from '@/components/Footer';
import { RxDividerVertical } from "react-icons/rx";
import useUIState from "@/hooks/useUIState";

const page = () => {
   const { push } = useRouter();
   const [ widths, setWidths ] = useState(false);
   const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
 

   const onClickCategory = (item:any ,src:any) => {
    if (homeCategory === item) {
      setHeaderImageSrc("");
      setHomeCategory(item);
    } else {
      setHeaderImageSrc(src);
      setHomeCategory(item);
      push(src)
    }
  };

return (
     
    <div>
  
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    

      <div className='md:mb-18 mb-4' />


       <section className='w-full flex flex-row items-center justify-center'>
      <div className="w-[1100px] md:block hidden items-center justify-center gap-1">
        <div className='flex flex-col'>
          <span className="text-[#333333] text-center text-[15px]">충청-4.5톤추레라/셀프로더</span>
          <div className='mb-3'/>
          <span className="text-[#333333] text-center text-[18px]" id="introText">
              안녕하세요.~~^~ 일반지게차,7톤.5톤 대형지게차,전동지게차,건설중장비 농기계,고소장비 010-9913-0673 운반/탁송<br/>
              전문 **충청추레라** (셀프로더//미니추레라) 대표 박 번 순 입니다. 010-9913-0673 언제든 전화주시면 신속히 달려가겠습니다. 
              <br/>귀사에 무궁한 발전과함께 좋은 일 가득하시길 기원합니다.
          </span>
           {/* <span className="text-[#333333] text-center text-[18px]" id="introText">
            ** 밥. 김치 제공 (고시텔 - 101동)
          </span> */}
       </div>   
       <div className='mt-5'/>
      </div>
     </section> 

  

  {/* ---start--- */}
     <section className='md:hidden  flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='flex flex-row gap-2'>
          
              <div className='lg:text-start font-bold text-center text-[20px] text-[#0c0d12]'>충청-4.5톤추레라/셀프로더</div>
            </div>
          <hr className="mt-1 h-0.5 md:bg-[#7f88e8] border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       </div>
       </div>
      
       
       <div className='md:mt-7 mt-2' />

       <div className='relative md:hidden  flex flex-row w-full px-3 py-1 justify-start items-start rounded-md gap-1' onClick={() => { push("/dae")}}>
          <Image
            alt="mediaItem"
            className="w-full h-[155px] rounded-md"
            width={235}
            height={155}
            src={"/Image/main1.jpeg"}
          />
    
         <div className='flex flex-col gap-1'>
          <Image
            alt="mediaItem"
            className="w-full h-[75px] rounded-md"
            width={125}
            height={75}
            src={"/Image/main2.jpeg"}
          />  

          <Image
            alt="mediaItem"
              className="w-full h-[75px] rounded-md"
            width={125}
            height={75}
            src={"/Image/main3.jpeg"}
          />  
      
          <div className='absolute w-[30px] h-[30px] text-[16px] flex justify-center items-center text-white right-3.5 bottom-1.5 bg-black md:opacity-40 opacity-60'>12</div> 
  
          </div>
       </div>
     <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
        <div className='md:mt-10' />
          <div className='text-[15px] text-[#222222] block md:hidden truncate text-start'>
            안녕하세요.~~^~</div>
          <div className='mt-1' />
          <div className='text-[15px] text-[#222222] md:hidden block truncate text-start'>
            일반지게차,7톤.5톤 대형지게차,전동지게차,건설중장비</div>
             <div className={cn('hidden text-[15px] text-[#222222] md:hidden truncate text-start', widths&&"block")}>
              <p className="text_intro _remark_text is_unfold">
                  <br /> 농기계,고소장비
                  <br /> 010-9913-0673
                  <br /> 운반/탁송 전문
                  <br /> <br /> **충청추레라**
                  <br /> <br /> (셀프로더//미니추레라)
                  <br /> <br /> 대표 박 번 순 입니다.
                  <br /> <br /> 010-9913-0673
                  <br /> <br /> 언제든 전화주시면 신속히 달려가겠습니다.
                  <br />
                  귀사에 무궁한 발전과함께 좋은 일 가득하시길 기원합니다.
                  <br />
                </p>
                </div>
          <div className='md:mt-10 mt-2' />
          <div className='md:hidden  flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-10 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => { widths ? setWidths(false) : setWidths(true)}}>{widths === false ? "열기" : "닫기"} &nbsp;</div>
          </div>
        </div>  
       </section>
    {/* ---end--- */}

      




    {/* ---start--- */}
      <section className='md:hidden block'>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>
    {/* ---end--- */}
     
        <div className="w-full md:w-[1100px] md:hidden flex flex-col items-center justify-center">
          <div onClick={() => {onClickCategory("시설안내" ,"/dastory")}} className="w-full md:w-[1100px] bg-black md:h-[70px] h-[45px] flex flex-row lg:px-8 md:pl-0 pl-3 items-center md:justify-center justify-start border-1 border-[#d9d8d8] gap-2">
              <span className="ml-3 md:text-[18px] text-[15px] text-white">
                시설안내
              </span>
          </div>   
          <div className='md:mt-3 mt-0' />
            <div onClick={() => {onClickCategory("게시판" ,"/ta")}} className="w-full bg-black md:w-[1100px] md:h-[70px] h-[45px] flex flex-row lg:px-8 md:pl-0 pl-3 items-center md:justify-center justify-start border-1 border-[#d9d8d8] gap-2">
              <span className="ml-3 md:text-[18px] text-[15px] text-white">
                게시판
              </span>
            </div>   
        </div>



 

   
  


          {/* 이미지 갤러리 시작 */}
      <div className='md:mb-18'></div>
    <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col md:h-[40px] h-[0px] justify-end'>
          <div className='lg:text-start md:block hidden font-semibold text-center text-[20px] text-black'>이미지 갤러리</div>
          <hr className="mt-1 h-0.5 md:bg-black bg-white border-t-0 opacity-100 w-[110px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[0px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("시설안내" ,"/dastory")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[990px]"/>
       </div>
       </div>
       </div>
      
       <div className='md:mt-7' />
    
        <div className='flex flex-col md:w-[530px] w-full'>
          <div className='md:hidden flex flex-col md:h-[40px] h-[0px] justify-end'>
          <hr className="mt-1 h-0.5 md:block hidden border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-3 mt-3' />
          <div className='lg:text-end text-center md:block hidden text-[14px]' onClick={() => {onClickCategory("시설안내" ,"/dastory")}}>더보기 &nbsp;&gt;</div>
       </div>
       </div>

        <div className='flex flex-col md:gap-5 gap-0'>
         <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-center items-start gap-5 rounded-md'>
              <Image
                  alt="mediaItem"
                  className="w-[540px] h-[350px] hidden md:block rounded-md"
                  width={540}
                  height={350}
                  style={{ objectFit: "cover" }}
                  src={"/Image/main1.jpeg"}
                />
                <Image
                  alt="mediaItem"
                  className="w-[350px] h-[350px] hidden md:block rounded-md"
                  width={350}
                  height={350}
                  src={"/Image/main2.jpeg"}
                />  
                <div className='flex w-[350px] flex-col gap-3'>
                <Image
                  alt="mediaItem"
                  className="w-[170px] h-[170px] hidden md:block rounded-md"
                  width={170}
                  height={170}
                  src={"/Image/main3.jpeg"}
                />   
                <Image
                  alt="mediaItem"
                  className="w-[170px] h-[170px] hidden md:block rounded-md"
                  width={170}
                  height={170}
                  src={"/Image/minichu.jpeg"}
                /> 
                </div>  
      </div>

      <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-center items-start gap-5 rounded-md'>
          <div className='flex w-[350px] flex-col gap-3'>
              <Image
                alt="mediaItem"
                className="w-[170px] h-[170px] hidden md:block rounded-md"
                width={170}
                height={170}
                src={"/Image/main5.jpeg"}
              />   
              <Image
                alt="mediaItem"
                className="w-[170px] h-[170px] hidden md:block rounded-md"
                width={170}
                height={170}
                src={"/Image/main6.jpeg"}
              />
          </div>
          <Image
            alt="mediaItem"
            className="w-[540px] h-[350px] hidden md:block rounded-md"
            width={540}
            height={350}
            src={"/Image/main7.jpeg"}
          />   
          <Image
            alt="mediaItem"
            className="w-[350px] h-[350px] hidden md:block rounded-md"
            width={350}
            height={350}
            style={{ objectFit: "cover" }}
            src={"/Image/main8.jpeg"}
          />  
        </div>  
       
       <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-center items-start gap-5 rounded-md'>
              <Image
                  alt="mediaItem"
                  className="w-[540px] h-[350px] hidden md:block rounded-md"
                  width={540}
                  height={350}
                  style={{ objectFit: "cover" }}
                  src={"/Image/main9.jpeg"}
                />
                <Image
                  alt="mediaItem"
                  className="w-[350px] h-[350px] hidden md:block rounded-md"
                  width={350}
                  height={350}
                  src={"/Image/main10.jpeg"}
                />  
                <div className='flex w-[350px] flex-col gap-3'>
                    <Image
                      alt="mediaItem"
                      className="w-[170px] h-[170px] hidden md:block rounded-md"
                      width={170}
                      height={170}
                      src={"/Image/main11.jpeg"}
                    />   
                    <Image
                      alt="mediaItem"
                      className="w-[170px] h-[170px] hidden md:block rounded-md"
                      width={170}
                      height={170}
                      src={"/Image/minipocre.jpeg"}
                    /> 
              </div>  
      </div>
       </div>


     </section>
    {/* 이미지 갤러리 끝 */}
     

     <div className='md:mb-18'></div>
      




      <Footer />
   </div>
   
 )
}

export default page;