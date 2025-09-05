import React from 'react';
import Image from 'next/image';
import heroImg from "@/assets/pngs/young-interprizing.webp";
import youngInterprizing from "@/assets/pngs/young-interprizing-2.webp";
import youngInterprizing3 from "@/assets/pngs/young-interprizing-3.webp";
import youngInterprizing4 from "@/assets/pngs/young-interprizing-4.webp";

const YoungEntrepeneurs = () => {
  
  return (
    <div>
      <Image src={heroImg} alt='' className='lg:h-[80vh] md:h-[60vh] h-auto w-[100%]' />
      <h1 className='lg:px-16 md:6 px-4 md:text-[35px]  text-[25px]  font-urbane-rounded font-bold'>EVERYTHING STARTED IN SCHOOL</h1>
      <p className='lg:px-16 md:6 px-4 md:text-[15px] text-[12px] font-light'>When we were only 16 (Carol) and 21 (Oli) years old -Carol in school and Oli in university- this whole life project started. We come from a very entrepreneurial family, from our grandparents to great grandparents, business has always run in our blood. We grew surrounded by the values of hard work, never giving up on what you love, perseverance and daily effort. Since day 1 our major inspiration have always been our parents, we owe everything to them.</p>
      <div className='sm:flex sm:flex-row flex-col-reverse flex justify-between items-center my-12  '>
        <div className='sm:w-[50%] w-full lg:px-16 md:6 px-4 lg:pr-26 sm:my-0 mt-12'>
          <h2 className=' md:text-[30px]  text-[20px]  font-urbane-rounded font-bold'>THE “HOW” RATHER THAN THE “WHAT”</h2>
          <p className=' md:text-[15px] text-[12px] font-light'>We always knew we wanted to create a world from where we could connect our personal values with our daily work, a project of our own with a strong essence behind, and where we could make this world a little better every day. For us it has always been much more important the HOW we did it then the WHAT we did. And it turned our to be sustainable toys for cool kids!
            It all made sense when we discovered natural rubber, our core raw material, a natural & biodegradable source that comes from Hevea Trees. Following a very artisanal, slow production process, we designed a few references and very soon we noticed that this small idea could become something big.
          </p>

        </div>
        <Image src={youngInterprizing} alt='' className='md:h-[90vh] h-auto sm:w-[50%] w-full' />
      </div>
      <p className='lg:px-16 md:6 px-4 md:text-[15px] text-[12px] font-light my-12' >&quot;Since the beginning of Oli&Carol, we wanted to act for the benefit of society. To do so, we are constantly transmitting important messages and taking actions to help our planet.&quot;</p>
      <div className='lg:px-16 md:6 px-4 my-6'>
        <h2 className='  md:text-[35px]  text-[25px] font-urbane-rounded font-bold'>FROM BARCELONA TO THE WORLD</h2>
        <p className=' md:text-[15px] text-[12px] font-light'> Today we are present in +80 countries worldwide. Our goal is to keep expanding our categories and our international community & messages around the world. As well as to keep investigating to offer the coolest and most sustainable, innovative toys for babies. </p>
      </div>
      <Image src={youngInterprizing3} alt='' className='lg:h-[80vh] md:h-[60vh] h-auto w-[100%] my-6' />
      <div className='lg:px-16 md:6 px-4 my-6'>
        <h2 className='  md:text-[35px]  text-[25px] font-urbane-rounded font-bold'>BUILDING A STRONG COMMUNITY</h2>
        <p className=' md:text-[15px] text-[12px] font-light'>

          We soon connected with those earth-conscious modern parents who looked for brands who offered something different, design-oriented and sustainable. Little by little, we designed more sustainable teethers and bath toys for kids from which we could communicate strong messages behind.
        </p>
        <h2 className='  md:text-[35px]  text-[25px] font-urbane-rounded font-bold mt-12'>HELP THE PLANET & THE PEOPLE</h2>
        <p className=' md:text-[15px] text-[12px] font-light'>
          As a brand we collaborate with associations who plant corals and restore our biodiversity in the oceans, donate products to local kids’ hospitals for babies to play with, and put our grain of sand in day-to-day causes and organizations where we believe we can help out. Furthermore, with our Fruits&Veggies designs, we introduce littles into a healthy lifestyle.
          Our mission is to help the planet every day choosing alternatives that are the most sustainable possible. And to keep helping our community into taking care of themselves and others that need it. Learn more about our social collaborations in our MORE THAN TOYS section.
        </p>
        <p className='md:text-[15px] text-[12px] font-light my-6'>“We believe that small actions make big changes. At Oli&Carol we try to make this world a better place but our main goal is to involve our community into daily actions that make this goal real”</p>

        <h2 className='  md:text-[35px]  text-[25px] font-urbane-rounded font-bold'>CONNECTING OUR PERSONAL VALUES AT WORK</h2>
        <p className=' md:text-[15px] text-[12px] font-light'>
          We consider ourselves art & design lovers. We love to travel, see new places and meet new people, as well as discovering different cultures. The fact that Oli&Carol is now present in so many places worldwide is because we’ve never seen boundaries anywhere. We’ve never been scared of wanting to connect with someone who’s in the other side of the world, or exhibit in a trade show far away. Stepping our of our comfort zone has always been a challenge we loved to take.
        </p>
        <h2 className='  md:text-[35px]  text-[25px] font-urbane-rounded font-bold mt-12'>A HOBBY AS YOUR WORK</h2>
        <p className=' md:text-[15px] text-[12px] font-light'>
          Making your passion your work is something that makes everything make sense. We are in continuous innovation designing and expanding the brand around the world.
        </p>
      </div>
      <Image src={youngInterprizing4} alt='' className='lg:h-[100vh] md:h-[60vh] h-auto w-[100%] mt-12'/>
    </div>
  )
}

export default YoungEntrepeneurs