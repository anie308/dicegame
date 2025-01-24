// import React from 'react'
import { IoLink } from "react-icons/io5";
import dice from '../../assets/dice.svg'
function Hero() {
  return (
    <div className=' px-[20px] lg:px-[40px] h-[85%] flex flex-col  justify-center'>
      <div className='flex flex-col w-full items-end justify-end'>
        <div className='bg-[#1E3557] p-[10px_25px]'>
          <p className='text-white font-[500] text-[30px] font-grotesk'>Reward Distributed: <span className='text-[#F47937]'>ICP</span></p>

        </div>
        <p className='text-white mt-[20px] text-end font-grotesk text-[35px] lg:text-[60px] font-[600] leading-[35px] lg:leading-[55px]'>Connect your wallet <br className='' /> now to continue</p>
        <p className='font-[500] text-[18px] mt-[10px] text-white text-end lg:text-start'>Welcome to Dragon Dice-Roll the dice, unleash powerful dragons
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row  items-start lg:items-center justify-between ">
      <div className='bg-[#FFFEFE3B] flex flex-col lg:flex-row items-start lg:items-center space-x-[20px] mt-[5%] w-full lg:w-fit  p-[20px] rounded-[10px]'>
        <p className='text-white leading-[30px] font-grotesk text-[25px]'>ICP Token <br className="hidden lg:block" /> Needed to play</p>
        <button className="bg-[#1E3557] flex items-center space-x-[5px] w-full lg:w-fit justify-center mt-[5px] lg:mt-0 p-[13px_25px] text-white text-[18px]">
          <p className="text-[20px] font-grotesk font-[500]">Connect Wallet</p>
          <IoLink className="text-[25px]" />
        </button>
      </div>
      <div>
        <img src={dice} className="h-[60px] lg:h-fit" alt="" />
      </div>
      </div>

    </div>
  )
}

export default Hero
