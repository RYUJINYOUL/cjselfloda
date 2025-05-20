
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'
import Review from '@/components/Review'

import Page from "./write/page"

const page = (props) => {
  const vals = props.searchParams.val ?? "account"

  return (
   <div className='relative top-12'>
    <section className='flex justify-center items-center m-4'>
    <div className="md:w-[1100px] w-full lg:mt-10 pt-3.5">
    <Tabs 
    defaultValue={vals}
    // onValueChange={() => { vals }}  
    className="w-full">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="account">게시판</TabsTrigger>
      <TabsTrigger value="password">글쓰기</TabsTrigger>
    </TabsList>


    <TabsContent value="account">
      <Page />
    </TabsContent>


    <TabsContent value="password">
      <Review />
    </TabsContent>
  </Tabs>
  </div>
    </section>
    </div>
  )
}

export default page
