export default function About() {
  
    return (
        <div className='relative text-center w-screen bg-white '>
           <h1 className='font-black text-[30px] text-[#52057b] '>ماذا نقدم ؟</h1>
        <div className="flex justify-center flex-wrap mt-16">
        <div className="w-[300px] m-4 font-black">
                <img className='w-[250px] h-[250px]' src="./img1.png" alt="img" />
                <h1 className='font-bold text-center text-black text-xl ' >حصص متابعة فردية</h1>
            <p>جدول حصص فردية مع احد مدرسينا المعتمدين ليقوم بمتاعبة مستواك الدراسي بشكل دائم </p>
            </div>
            <div className="w-[300px] m-4 font-black">
                <img className='w-[250px] h-[250px]' src="./img2.png" alt="img" />
                <h1  className='font-bold text-center text-xl text-black '>تعليم تفاعلي </h1>
<p>توفر ادوات تفاعلية تضمن تفاعل الطالب والمدرس بما ينعكس حودة العملية التعليمية </p>
            </div>
            <div className="w-[300px] m-4 font-black">
                <img className='w-[250px] h-[250px]' src="./img3.png" alt="img" />
                <h1  className='font-bold text-center text-xl text-black'>مساعدات دراسية فورية </h1>
            <p>اطرح سوُال وسنقوم فورا بشرحة مرئي في فصولنا التفاعلية</p>
            </div>
        </div>
        </div>
    );
};

