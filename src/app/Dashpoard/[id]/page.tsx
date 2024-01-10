
function Page() {
    return (
        <div>
            
             <form action="">
            <div className="h-[400px] relative flex items-center flex-col text-center w-[100%] justify-center">
            <input className="w-[80%] focus:outline-none border-solid border-black border mb-[1px] pr-4 " type="text" placeholder="اسم الكتاب " />
            <input className="w-[80%] focus:outline-none border-solid border-black border mb-[1px] pr-4 " type="text" placeholder="اسم المادة " />
            <input className="w-[80%] focus:outline-none border-solid border-black border mb-[1px] pr-4 " type="text" placeholder="المرحلة الدراسية " />
            <input className="w-[80%] focus:outline-none border-solid border-black border mb-[1px] pr-4 " type="text" placeholder="السعر" />
            <input className="w-[80%] focus:outline-none border-solid border-black border mb-[1px] pr-4 " type="text" placeholder=" نوع الكتاب " />
            <button className="bg-[#52057b] text-white font-black w-[80%] mt-2" >تعديل الكتاب</button>
            </div>
            </form>   
        </div>
    );
};

export default Page;