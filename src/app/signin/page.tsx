import Image from 'next/image';
import React from 'react';
import logo from "@/assets/pngs/oli-logo-siginin.png";
import GlobalButton from '@/globalComponents/buttons/GlobalButton';
import GlobalInput from '@/globalComponents/inputs/GlobalInput';
const Signin = () => {
  return (
    <div className='h-screen bg-white text-black w-full flex justify-center items-center'>
      <div className='border border-gray-300 rounded-md w-[450px] p-4 flex flex-col justify-center items-start gap-4'>
<Image src={logo} alt='' className='h-auto w-[200px] mx-auto'/>
<div>
<p className='text-[25px] font-bold font-urbane-rounded leading-[35px]'>Sign in</p>
<p>Choose how you'd like to sign in</p>
</div>
<GlobalButton title='Sign in with Shop' className='bg-[#5434eb] text-white w-full rounded-[10px]'/>
<div className="flex items-center gap-4 w-full">
  <div className="flex-grow border-t border-[#dedede]"></div>
  <span className="text-gray-600">or</span>
  <div className="flex-grow border-t border-[#dedede]"></div>
</div>
<div className='w-full'>
<GlobalInput title='email' width='100%' />
</div>
<GlobalButton title='Sign in with Shop' className='bg-[#cf9f78] text-white w-full  rounded-[10px]'/>
</div>
    </div>
  )
}

export default Signin;