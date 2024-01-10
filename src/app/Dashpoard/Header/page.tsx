import { HeaderDashpoard } from "@/app/data";
import Link from "next/link";

function Page() {
    return (
        <>
         <div className="logo">
            </div>   
        <div className="head">
            <nav><ul>
                <div className="flex justify-start items-start ">
               {HeaderDashpoard&&HeaderDashpoard.map((i,o)=>(
<li className="m-2 cursor-pointer font-black" key={o}><Link href={i.url}>{i.title}</Link></li>
               ))}
               </div>
               </ul>
            </nav>
        </div>
        </>
    );
};

export default Page;