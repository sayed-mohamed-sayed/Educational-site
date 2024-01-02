"use client"
import Link from 'next/link';
import { useState } from 'react';
export default function Header() {

    const  [toggle,settoggle]=useState(false)


    return (
<div className="contaner ">

<div   className="toggles ">
<input type="checkbox" id="checkbox"/>
<label onClick={()=>settoggle(!toggle)}   htmlFor="checkbox" className="toggle">
  <div style={{background:toggle&&"white"}} className="bar bar--top"></div>
  <div style={{background:toggle&&"white"}} className="bar bar--middle"></div>
  <div style={{background:toggle&&"white"}} className="bar bar--bottom"></div>
</label>

</div>
    <div className="box font-black nav">
        <nav>
            <ul style={{height:toggle&&"40%" }} className='flex '>
                
                <li className='mr-2 font-black  sm:text-lg md:text-lg sm:mr-6 hover:text-[#52057b]  '><Link href="/">الرئيسية</Link> </li>                
                <li className='mr-2 font-black  sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/book">المقررات الدراسية</Link></li>
                <li className='mr-2 font-black  sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/Emthan">الاختبارات الاكترونية</Link></li>
                <li className='mr-2 font-black  sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/Contact">تواصل معنا</Link></li>
                <li className='mr-2 font-black  sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/Student">بيانات الطالب</Link></li>
            </ul>
        </nav>
    </div>
</div>            
    );
};

