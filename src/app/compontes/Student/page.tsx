"use client"
import { useState } from 'react';
import Headerw from '../header/page';
import UpdateStudent from '../Student/UpdateStudent/page';
import Image from 'next/image';
export default function Student() {
  
    const [togle,settogle]=useState(false)


    return (
        <>
        <div className='bg-[#00000026]'>
        <div className=" bg-white font-bold cursor-pointer h-[30px] mt-2 mb-6">
            <Headerw/>
        </div>
        <div className="text-start">
          <h1 className='font-bold w-screen pr-4 text-xl text-start text-[#52057b]'>تواصل معنا  </h1>
<div className="w-screen h-[420px]  bg-white text-start flex justify-center flex-col items-center relative "  >
<div className="w-screen text-start flex justify-start flex-col items-start pr-8 mb-[80px] ">

<div className="flex justify-center items-center  ">
    <Image width={50} height={50} className='w-[50px] ml-4 h-[50px] rounded-full absolute  top-[10px] ' src="/5.jpg" alt="img" />
    <h1>الاســـــــم :السيد محمد السيد</h1>
</div>
<p>رقم الموبيل :01018364752</p>
<p>الايميل :sa3356139@gmail.com</p>
<div className="flex">
<p>كلمة السر </p>
<input className='mr-8 border-none focus:outline-none' type="password" name="password"  value={17579325657}/>
</div>
</div>
<button className='font-bold w-[60%] text-center  bg-[#52057b] text-white rounded' onClick={()=>settogle(true)}>تعديل البيانات</button>
</div>
      </div>
        </div>
        { togle&&
            <div>

                <UpdateStudent togle={togle} settogle={settogle}/>
            </div>
        }
        </>
    );
};

