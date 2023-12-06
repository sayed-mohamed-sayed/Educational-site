"use client"
import { useState } from 'react';
import Header from "../header/page"
import Image from 'next/image';
export default function Book() {
  
    type datas={
        id:number ,
        name:string,
        link:string,
        img:string
    }
    const [data,setdata]=useState([
        {
            id:1,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:2,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:3,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:4,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:5,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:6,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:7,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:8,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:9,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:10,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
        {
            id:11,
            name:"كتاب الامتحان" ,
            link:"تحميل الكتاب",
            img:"/img5.png"
        },
                     

])
    return (
        <div className='bg-[#00000026] font-black'>

        <div className=" bg-white font-bold cursor-pointer h-[30px] mt-2 mb-12">
             <Header/>
        </div>
     <h1 className='text-center font-black text-[#52057b] text-xl spacing-[10px]'>الكتب الدراسية </h1>
        <div className='relative flex justify-center flex-wrap text-center w-screen mb-[50px] '>
            <Image width={1000} height={1000} className='w-screen h-screen fixed z-[-1]'  src="/book.jpg" alt="img" />
       {
           data.map((i:datas) =>{
               return (
                   <div key={i.id} className=" m-2 bg-white p-4 border-solid border-[#0000004a] border h-[200px] font-black">
                       <Image width={100} height={100} src={i.img} alt="img" />
                       <h1 className=''>{i.name} </h1>
                       <a className='mb-4' href="/">{i.link} </a>
                   </div>

               );
           })
       }
        
          
        </div>
        </div>
    );
};

