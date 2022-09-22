import Image from 'next/future/image'
import {EnvelopeIcon} from "@heroicons/react/24/outline"

const Slider = () => {
    return ( <>
    
    <div className='flex justify-center w-screen h-screen '>
      <div className='w-11/12 h-3/4 flex justify-center mt-5 relative'>
        <div className='absolute top-24 left-10 '>
          <h2 className='text-5xl font-bold font-serif text-slate-600'>Don{"'"}t Miss Amazing Dates</h2>
          <p className='mt-20 text-3xl font-bold font-serif text-slate-500'>Subcribe for later</p>
          <form className='flex mt-10 text-xl w-3/4 bg-white rounded-full'>
            <EnvelopeIcon className='h-14 p-2 text-xl'/>
        <input type="text" className='w-full p-2 outline-none ' placeholder='Your Email Address' />
        <input type="submit" className='bg-green-500 text-xl w-96 text-white rounded-full' value={'Subscribe'}/>
        </form>
        </div>

      <Image src='/landing.jpg' className='w-full rounded-xl' width="0" height="0" sizes='100vw' alt='landing'/>
      </div>
    </div>
    </> );
}
 
export default Slider;