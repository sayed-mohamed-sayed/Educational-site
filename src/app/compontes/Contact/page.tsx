"use client"
import Headerw from '../header/page';
export default function Emthan() {
  
    return (
        <div className='bg-[#00000026]'>
        <div className=" bg-white font-bold cursor-pointer h-[30px] mt-2 mb-6">
            <Headerw/>
        </div>
        <div className="text-start">
            <div className="flex justify-center items-center">
          <h1 className='font-black  pr-4 text-xl text-start text-[#52057b]'>تواصل معنا  </h1>
{/* <img className='w-[40px] h-[40px]' src="./ty.jpg" alt="" /> */}
            </div>
<div className=" w-screen h-[420px]  bg-white text-center flex justify-center flex-col items-center"  >
<input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="text" name="" placeholder='اكتب اسمك ' id="" />
<input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="email" name="" id="" placeholder='اكتب ايميلك' />
<textarea className='focus:outline-none w-[60%] pr-4 m-2 border border-solid border-[#52057b3d]' name="" id="" placeholder='ارسل لنا رسالة '></textarea>
<button className='font-black w-[60%]   bg-[#52057b] text-white rounded'>ارسال</button>
</div>
      </div>
      
        </div>
    );
};






// // @flow strict

// import * as React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { produsts } from '../data/product';
// import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
// import Headerw from './header';
// export default function Emthan() {

//     return (
//         <div className='bg-[#00000026]'>
//             <div className=" bg-white font-bold cursor-pointer h-[30px] mt-2 ">
//                 <Headerw />
//             </div>
//             <div className="text-start">
//                 <img className='absolute z-[-1] w-screen h-[350px] ' src="./contacts.jpg" alt="" />
//                 <h1 className='font-bold w-screen pr-4 text-xl text-start text-white'>تواصل معنا  </h1>
//                 <div className=" w-screen h-[350px]   text-center flex justify-center flex-col items-center"  >
//                     <div className="w-[60%] relative">
//                         <p className='absolute text-black left-0 bg-[white] pr-2 pl-2'>اكتب اسمك</p>
//                         <input className='bg-[#ffffff2b] text-black focus:outline-none border border-solid border-white w-[100%] pr-4 m-2' type="text" name="" id="" />
//                     </div>
//                     <div className="w-[60%] relative">
//                         <p className='absolute text-black left-0 bg-[white] pr-2 pl-2'>اكتب ايميلك</p>

//                         <input className='bg-[#ffffff2b] text-black focus:outline-none border border-solid border-white w-[100%] pr-4 m-2' type="email" name="" id="" />
//                     </div>
//                     <div className="w-[60%] relative">
//                         <p className='absolute text-black left-0 bg-[white] pr-2 pl-2'>ارسل لنا رسالة</p>

//                         <textarea className='bg-[#ffffff2b] text-black focus:outline-none w-[100%] pr-4 m-2 border border-solid border-white' name="" id="" ></textarea>
//                     </div>
//                     <button className='font-bold w-[60%]   bg-[#ffffff78] text-black rounded'>ارسال</button>
//                 </div>
//             </div>

//         </div>
//     );
// };

