import Image from "next/image";

export default function Footerr() {

    return (
        <div className=' w-screen h-[100px]  bg-black flex flex-wrap justify-around'>
            {/* <div className="font-black text-white text-start w-[200px]">
                <h1>احصل علي المساعدات الدراسية التي تحتاجها في لحظات واستمتع بتجربةتعليمية ممتعة وفريدة من نوعها</h1>
            </div> */}
            <div className="font-black text-white text-start">
                <p>الرئسية</p>
                <p>تواصل معنا </p>
                <p>من نحن </p>
                <p>الشروط والاحكام</p>
            </div>
            <div className=" p-2 text-center flex justify-center flex-col">
                <div className="text-white font-black">
                    <h1>تابعنا علي </h1>
                </div>
                <div className=" p-2 text-start flex justify-center">
                <Image width={20} height={20} className='w-[20px] h-[20px] bg-white m-2 rounded-full' src="/face.png" alt="img" />
                <Image width={20} height={20} className='w-[20px] h-[20px] bg-white m-2 rounded-full' src="/whats.png" alt="img" />
                <Image width={20} height={20} className='w-[20px] h-[20px] bg-white m-2 rounded-full' src="/twiter.webp" alt="img" />
                </div>
            </div>
        </div>
    );
};

