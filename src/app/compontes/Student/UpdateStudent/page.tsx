export default function UpdateStudent({settogle}:any) {


    return (
        <div className='bg-[#00000026] '>

            <div className="text-start absolute  w-[100%] top-[40px]">
                <h1 className='font-bold w-screen pr-4 text-xl text-start text-[#52057b]'>تعديل البيانات  </h1>
                <div className=" h-[350px]  bg-white text-center flex justify-center flex-col items-center"  >
                    <input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="text" name="" placeholder='الاسم ' id="" />
                    <input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="number" name="" placeholder='رقم التليفون' id="" />
                    <input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="email" name="" id="" placeholder='الايميل' />
                    <input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="password" name="" placeholder='كلمة السر ' id="" />
                    <input className='focus:outline-none border border-solid border-[#52057b3d] w-[60%] pr-4 m-2' type="file" name=""  id="" />
                    <button className='font-bold w-[60%]   bg-[#52057b] text-white rounded' onClick={()=>settogle(false)}>تعديل</button>
                </div>
            </div>

        </div>
    );
};

