import Image from "next/image";
import { Phone, MessageSquare, Share2 } from "lucide-react";


const Gallery3 = () => {

  return (
    <div className="w-full sm:w-auto">
      <div className='relative w-full md:h-[500px] h-[430px]'>
       <Image
          alt="mediaItem"
          className="object-cover"
          // width={530}
          // height={353}
          fill
          src={"/Image/main9.jpeg"}
        /> 
        <div className='absolute md:h-[500px] h-[430px] top-0 bg-black md:opacity-40 opacity-60 w-full'></div>

         <div className="absolute hidden md:block md:top-1/2 top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
              <img
                src="/Image/main1.jpeg"
                alt="고시원 썸네일"
                className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full mx-auto mb-4"
              />
              <div className="text-[22px] md:text-[20px] md:w-screen w-[300px] font-bold text-[#fff] whitespace-pre-line">
                충청 미니추레라 
              </div>
              <p className="text-[15px] md:text-base text-[#ffffff99]">
                010-9913-0673 지게차/건설장비 탁송 전문
              </p>
              <div className="mt-2"></div>
           </div>


           <div className="relative top-3/10 pt-20 px-30 flex flex-row items-center justify-center">
              <div className="absolute md:hidden flex top-3/10 flex-row">
                  <div className="w-1/2 h-[220px] top-3/10 pl-2">
                <img
                  src="/Image/main1.jpeg" // Replace with actual image path
                  alt="미니추레라"
                  className="h-[220px] object-cover"
                />
              </div>
              </div>
              <div className="pr-3">
              <div className="-mt-3 -mr-45 md:hidden absolute flex flex-col items-center justify-center gap-3 
                 w-1/2 h-[252px] top-3/10 bg-[#211D1F]">
                <div>
                  <h2 className="text-[21px] text-[#FFFFFF] font-bold">충청</h2>
                  <h3 className="text-[21px] text-[#FFFFFF] font-bold mb-2">미니추레라</h3>
                  <p className="text-[14px] text-[#FFFFFF80]">010-9913-067<br/>지게차/건설장비<br/> 탁송 전문</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[black] text-white p-2">
                   <a href="tel:0507-1315-0673">
                    <Phone className="w-4 h-4" />
                    </a>
                  </button>
                  <button className="bg-[black] text-white p-2">
                    <a href="sms:0507-1315-0673">
                    <MessageSquare className="w-4 h-4" />
                    </a>
                  </button>
                  <button className="bg-[black] text-white p-2" onClick={()=>{
                    navigator.share({
                      title: "충청 미니추레라",
                      url: "https://cjselfloda.vercel.app"
                    })
                  }}>
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  );
};


export default Gallery3;