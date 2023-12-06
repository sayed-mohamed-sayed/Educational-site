import Headerw from '../header/page';
import Table from '../Emthan/Taple/page';
import Result from '../Emthan/Result/page';
import Test from '../Emthan/Test/page';

export default function Emthan() {
  
    return (
        <div className='bg-[#00000026]'>
        <div className=" bg-white font-bold cursor-pointer h-[30px] mt-2 mb-6">
            <Headerw/>
        </div>
        
      <Test/>
       <Result/>
      <Table/>
        </div>
    );
};

