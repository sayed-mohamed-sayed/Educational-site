// @flow strict

import Link from "next/link"
import Header from "../header/page";
export default function SIGN() {
  
    return (
        <div className='bg-[#00000026]'>
        <div className=" bg-white font-bold cursor-pointer h-[30px] mt-2 mb-6">
            <Header/>
        </div>
        <div className="text-start font-black">
          <h1 className='font-black w-screen pr-4 text-xl text-start text-[#52057b]'>تسجيل الدخول </h1>
<div className="w-screen h-[350px]  bg-white text-center flex justify-center flex-col items-center"  >
<input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="text" name="" id="" placeholder='اكتب الاسم ' />
<input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="email" name="" id="" placeholder='اكتب ايميلك' />
<input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="password" name="" placeholder='اكتب كلمة السر ' id="" />
<button className='font-black w-[60%]   bg-[#52057b] text-white rounded'>انشاء حساب </button>
<Link href="/compontes/login">لدي حساب <span className='text-[#52057b]'>تسجيل الدخول </span></Link>
</div>
      </div>
      
        </div>
    );
};

