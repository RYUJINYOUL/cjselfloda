import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'

function page (){
  return (
  <div className='relative'>
    <div className='lg:my-10 p-4 md:pt-3.5 pt-18 flex flex-col items-center justify-center'>
      <section className='flex flex-col justify-center items-center'>
      <div className='lg:mt-13' />
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
             <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] text-black'>시설안내</div>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
      </section>

      <section className='flex flex-col justify-center items-center'>
         <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/minichu.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col'>
          <div className='text-[20px] lg:w-[1100px] text-center'>22년6월7m최신-셀프로더/미니추레라</div>
          <div className='mt-1' />
          <div className='text-[15px] text-center'>010-9913-0673 연락주시면 어디든 달려가겠습니다.</div>
          <div className='mt-10' />
        </div>
      </section>  

      <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/minipocre.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col'>
          <div className='text-[20px] lg:w-[1100px] text-center'>3톤지게차,미니포크레 코일운반</div>
          <div className='mt-1' />
          <div className='text-[15px] text-center'>안전을 최우선으로하는 충청추레라입니다.</div>
          <div className='mt-10' />
        </div>
      </section>
     
      <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/3.5.2.5.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col'>
          <div className='text-[20px] lg:w-[1100px] text-center'>3.5톤,2.5톤 운반</div>
          <div className='mt-1' />
          <div className='text-[15px] text-center'>안전을 최우선으로하는 충청추레라입니다.</div>
          <div className='mt-10' />
        </div>
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main1.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col'>
          <div className='text-[20px] lg:w-[1100px] text-center'>적제길이 7m</div>
          <div className='mt-1' />
          <div className='text-[15px] text-center'>최신형 셀프</div>
          <div className='mt-10' />
        </div>
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/trector.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col'>
          <div className='text-[20px] lg:w-[1100px] text-center'>트렉터 운반</div>
          <div className='mt-1' />
          <div className='text-[15px] text-center'>풀옵션~~^^</div>
          <div className='mt-10' />
        </div>
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main2.jpeg"}
          />
        <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main3.jpeg"}
          />
          <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main5.jpeg"}
          />
          <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main6.jpeg"}
          />
          <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main7.jpeg"}
          />
          <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main8.jpeg"}
          />
              <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main9.jpeg"}
          />
             <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main10.jpeg"}
          />
             <div className='md:mt-7 mt-3' />
       
      </section>

       <section className='flex flex-col justify-center items-center'>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={620}
            src={"/Image/main11.jpeg"}
          />
        <div className='md:mt-7 mt-3' />
       
      </section>

         <Footer />
       </div>
       </div>
  )
}

export default page
