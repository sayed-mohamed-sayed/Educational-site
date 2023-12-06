import Link from "next/link";

export default function Test() {
  
    return (
        <>
       <div className="mt-4 font-black w-screen pr-4 text-[#52057b] text-xl text-start">
           <h1>ادخل الاختبار </h1>
</div>

 <div className="w-screen bg-white h-20 mb-8 text-center font-black"  >
     <Link href="/test">
<button>ادخل الان</button>     
     </Link>
  </div>
        </>
    );
};

