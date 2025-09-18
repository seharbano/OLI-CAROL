"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "@/assets/pngs/oli-logo-siginin.png";
import GlobalButton from '@/globalComponents/buttons/GlobalButton';
import GlobalInput from '@/globalComponents/inputs/GlobalInput';
import Link from 'next/link';

const Signin = () => {
  const [email, setEmail] = useState("");

  return (
    <div className='h-screen bg-white text-black w-full flex justify-center items-center'>
      <div className='border border-gray-300 rounded-md w-[450px] p-10 flex flex-col justify-center items-start gap-4'>
        <Image src={logo} alt='' className='h-auto w-[200px] mx-auto'/>
        
        <div>
          <p className='text-[25px] font-bold font-urbane-rounded leading-[35px]'>Sign in</p>
          <p className='text-[14px] text-[#575757]'>Choose how you&apos;d like to sign in</p>
        </div>

        <GlobalButton title='Sign in with Shop' className='bg-[#5434eb] text-white w-full rounded-[10px]'/>
        
        <div className="flex items-center gap-4 w-full">
          <div className="flex-grow border-t border-[#dedede]"></div>
          <span className=" text-[#575757]">or</span>
          <div className="flex-grow border-t border-[#dedede]"></div>
        </div>

        <div className='w-full'>
          <GlobalInput
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="100%"
          />
        </div>

        <GlobalButton title='Continue' disabled className='bg-[#cf9f78] text-white w-full rounded-[10px]'/>
        <div className='flex justify-center gap-6 h-[16px]'>
          <p className='hover:border-b hover:border-b-[#cf9f78] text-[#cf9f78] text-[13px]'>
            <Link href="/">
            Privacy policy
            </Link>
          </p>
          <p className='hover:border-b hover:border-b-[#cf9f78] text-[#cf9f78] text-[13px]'>
            <Link href="/">
            Terms of service
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signin;
