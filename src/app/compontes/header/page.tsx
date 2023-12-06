import Link from 'next/link';
export default function Header() {
  
    return (
<div className="contaner ">
    <div className="box font-black">
        <nav>
            <ul className='flex '>
                
                <li className='mr-1 font-black text-[11px] sm:text-lg md:text-lg sm:mr-6 hover:text-[#52057b]  '><Link href="/">الرئيسية</Link> </li>                
                <li className='mr-2 font-black text-[11px] sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/book">المقررات الدراسية</Link></li>
                <li className='mr-2 font-black text-[11px] sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/Emthan">الاختبارات الاكترونية</Link></li>
                <li className='mr-2 font-black text-[11px] sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/Contact">تواصل معنا</Link></li>
                <li className='mr-2 font-black text-[11px] sm:text-lg md:text-lg sm:mr-6 hover:bg-[white] hover:text-black hover:rounded '><Link href="/compontes/Student">بيانات الطالب</Link></li>
            </ul>
        </nav>
    </div>
</div>            
    );
};

