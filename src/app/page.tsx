import Link from 'next/link';
import * as React from 'react';
import Header from './compontes/header/page';
import About from './compontes/Apout/page';
import Type from './compontes/Type/page';

export default function Homew() {
  
    return (
        <div className='relative'>
            <div className="absolute  m-2 text-white z-10 cursor-pointer font-black ">

            <Header/>
            </div>
           <div className="contaner flex justify-center items-center  ">
               <div className="w-screen h-[100vh]">
                   <span className='w-[100%] h-[100%] bg-[#00000047] absolute  '></span>
                   <img className='w-screen h-screen fixed z-[-1]' src="./p1.png" alt="img" />
               </div>
               <div className=" absolute  font-black text-center ">
                   <h1 className=' font-black text-center z-6 text-white text-[30px]'>هنذاكر اونلاين </h1>
                   <p className='M-text font-black w-[350px] z-6 text-white text-[20px]'>ان تعليم الناس وتثقيفهم في حد ذاتة ثروة كبيرة فالعلم ثروة ونحن نبني المستقبل علي اساس علمي</p>
           <div className="flex justify-center text-white font-black   ">
           <button className='border border-white m-4 pr-2 pl-2 w-[110px]'>اعرف اكثر </button>
           <Link href="/compontes/login">
           <button className='border border-white m-4 pr-2 pl-2 w-[110px]'> تسجيل الدخول </button>
           </Link>
           </div>
               </div>
           </div>
             <About/>
            <Type/> 
       
        </div>
    );
};

