"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "@/assets/pngs/oli-logo-siginin.png";
import GlobalButton from '@/globalComponents/buttons/GlobalButton';
import GlobalInput from '@/globalComponents/inputs/GlobalInput';
import Link from 'next/link';

const AuthenticationCode = () => {
  const [email, setEmail] = useState("");

  return (
    <div className='h-screen bg-white text-black w-full flex justify-center items-center'>
      <div className='border border-gray-300 rounded-md w-[450px] p-10 flex flex-col justify-center items-start gap-4'>
        <Image src={logo} alt='' className='h-auto w-[200px] mx-auto' />

        <div>
          <p className='text-[25px] font-bold font-urbane-rounded leading-[35px]'>Enter code</p>
          <p className='text-[14px] text-[#575757]'>Sent to seharmlik670@gmail.com</p>
        </div>

        <div className='w-full'>
          <GlobalInput
            id="6-digit code"
            title="6-digit code"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="100%"
          />
        </div>

        <GlobalButton title='Submit' className='bg-[#cf9f78] text-white w-full rounded-[10px]' />

        <p className='hover:border-b hover:border-b-[#cf9f78] text-[#cf9f78] text-[13px]  h-[18px]'>
          <Link href="/">
            Sign in with a different email
          </Link>
        </p>
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

export default AuthenticationCode;

// export default AuthenticationCode