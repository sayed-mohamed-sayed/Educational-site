import Link from "next/link";
import { book } from "../data";
import Image from "next/image";
function Page() {
    return (
        <div className="flex justify-center text-center items-center flex-wrap ">
            {book&&book.map((i ,o)=>(
                <div className="m-2 bg-white p-4 border-solid border-[#0000004a] border h-[200px] font-black" key={o}>
<Image src={i.img} width={100} height={100} alt="Image"/>
<h1>{i.title}</h1>
<div className="flex flex-col mt-2">
    <button className="bg-[#52057b] text-white pr-2 pl-2" ><Link href={`/Dashpoard/${i.id}`}>تعديل الكتاب</Link> </button>
    <button className="bg-[#00000036] pr-2 pl-2 mt-[1px]">حذف الكتاب</button>
</div>
                </div>
            ))}
        </div>
    );
};

export default Page;