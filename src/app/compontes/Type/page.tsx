"use client"
import { useState } from 'react';
export default function Type() {
  
const [data ,setdata]=useState([
    {id:1,
        img:"",
    name:"تعلم سهل وممتع " ,
explan:"تعلم محتوي تعليمي بشكل بسيط وممتع وبجودة عالية "
},
    {id:2,
        img:"",
    name:"محتوي تعليم متنوع ",
explan:"تقدم محتوي متنوع ومتكامل يخدم مختلف الفئات والمجالات"
},
    {id:3,
        img:"",
    name:"تعلم احدث التقنيات",
explan:"تقدم محتوي متجدد وفقاٌ لاحدث التقنيات المطلوبة في سوق العمل "
},

])

    return (
        <div className='relative text-center w-screen pt-20 pb-12 bg-white '>
      <h1 className='font-black text-[30px] text-[#52057b] mb-16'>اهم ما يميزنا؟</h1>
      <div className="flex justify-center items-center flex-wrap">
         {
             data.map((i)=>(
                <div key={i.id} className="m-4 h-[150px] font-black shadow-[#52057b] shadow-sm ">
                <h1 className=' text-[25px] text-black '>{i.name}</h1>
                <p className='w-[220px]'>{i.explan}</p>
            </div>
             ))
         }
      </div>
        </div>
    );
};

