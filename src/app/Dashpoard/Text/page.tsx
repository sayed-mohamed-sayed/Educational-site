
function Page() {
    return (
        <>
         <div className=" bg-zinc-100 h-[200px]">
            <h1>عمل اختبار</h1>
            </div> 
            <div className="bg-zinc-100 h-[200px] mt-4">
                <h1>جدول الامتحانات</h1>
           <div className="flex justify-center items-center w-[100%] flex-col">
                <input type="text" name="" id=""  placeholder="اسم المادة" className="focus:outline-none w-[80%] border-solid border-black border mb-[1px]"/>
               <input type="text"  placeholder="مدة الامتحان" className="focus:outline-none w-[80%] border-solid border-black border mb-[1px]" name="" id="" />
               <div className="flex w-[80%]">
               <p>وقت الامتحان</p>
                <input type="time"  />
               </div>
               <div className="flex w-[80%]">
                <p>تاريخ الامتحان</p>
                <input type="date" name="" id=""  />
                
               </div>
               <button className="bg-[#52057b] text-white font-black w-[80%] mt-2" >اضافة الجدول</button>

           </div>
                </div>
                  <div className="bg-zinc-100 h-[200px] mt-4 flex flex-col justify-center items-center w-[100%]">
                    <h1>نتائج الطلاب</h1>
                    <input type="text" placeholder="اسم الطالب " className="focus:outline-none border-solid border-black border mb-[1px] w-[80%]"/>
                    <input type="text" placeholder="الدرجة" className="focus:outline-none border-solid border-black border mb-[1px] w-[80%]"/>
                    <button className="bg-[#52057b] text-white font-black w-[80%] mt-2" >اضافة البيانات</button>

                  </div>
        </>
    );
};

export default Page;