import Image from "next/image";

function Page() {
    return (
        <>
          <h1 className="pr-4 font-black text-lg ">بيانات الطلاب</h1>
        <div className="border border-solid border-black m-4">
<div className="flex m-4 justify-start items-center pr-2 ">
    <Image  className="rounded-[50%] w-[60px] h-[60px]  "src={"/5.jpg"} width={70} height={70} alt="Image"/>
<h1 className="mr-4">اســــــم الطالب</h1>
</div>
<div className="pr-2">
    <h1>ايميل الطالب</h1>
    <p > حظر الطالب <span className="font-medium text-sm">لن يتمكن الطالب من الدخول مره اخري </span></p>
</div>
        </div>
        </>
    );
};

export default Page;