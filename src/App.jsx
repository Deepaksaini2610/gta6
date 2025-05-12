import React, { useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
const App = () => {
  const [showAnimation,setShowAnimation] = useState(false)
  useGSAP(()=>
    {
      const tl = gsap.timeline();
      tl.to(".image", {
        scale: 1.8,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setShowAnimation(true);
        },
      });
     
      // onComplete()
      
  },[showAnimation])
  return (
    <div>
      <div className="container bg-black text-white flex flex-col justify-center items-center h-screen w-screen">
        <div className="relative  w-1/2 h-1/2  text-center">
          <img
            className="image w-full overflow-hidden h-full   "
            src="/bg.png"
            alt=""
          />
          <h1 className="gta absolute top-1/2 left-1/2 text-2xl text-white">
            GTAVI
          </h1>
        </div>

        {showAnimation && (
          <div className=" absolute top-0 left-0 bg-black-500 h-screen w-screen bg-black ">
            <div className="bg-black relative ">
              <img
                className="absolute top-0 left-0 w-full h-screen object-cover"
                src="/public/sky.png"
                alt=""
              />
              <img
                src="/public/bg.png"
                className="absolute top-0 left-0 h-screen w-full object-cover "
                alt=""
              />
            </div>
            <div className=" z-20">
              <div className="absolute top-1  gap-3 left-1/3 mt-48 ">
                <h1 className="text-6xl ml-60">grand</h1>
                <h1 className="text-6xl ml-20"> thieft</h1>
                <h1 className="text-6xl ml-60">auto</h1>
              </div>

              <img
                className="h-120 absolute left-1/3 bottom-0 ml-20 "
                src="/public/girlbg.png"
                alt=""
              />
            </div>
            <div className="z-20 absolute top-0 left-0 flex justify-center items-center text-center ">
              <div className="flex flex-col mt-6 gap-1 ml-4 justify-baseline">
                <div className="border-2 h2 w-10 "></div>
                <div className="h2 w-8 border-2"></div>
                <div className="h2 w-6 border-2"></div>
              </div>
              <h1 className="text-white z-20 mt-6 text-3xl ml-2">RockStar</h1>
            </div>

            <div className='flex  absolute left-2 bottom-0'>
              <img src='/public/ps5.png' className='w-20 h-20'/>
              <img src='/public/logo18.png' className='w-20 h-20'/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App