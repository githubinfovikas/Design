import logo from '../assets/logo_vikas.png'
import { IoIosArrowDown } from "react-icons/io";
const Design = () => {
    return (
        <div>
            <div className='border-l-2 border-t-2 border-b-2 border-black h-96 w-96 rounded-2xl'>

                <div className="border-r-2  border-black rounded-tr-2xl h-28">



                    <div className='w-20 ml-20 pt-4 '>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className=' text-3xl ml-[366px] pt-1'>
                        <IoIosArrowDown />
                    </div>

                </div>

                <div className='grid grid-cols-3 mt-3.5'>
                    <div className='text-center font-bold text-2xl  flex gap-2'>
                        <div className='ml-4 text-[80px]'>1</div>
                        <div className='h-12 pl-4 pr-10 flex items-center border-2 rounded-r-3xl border-black'>MISSION</div>
                    </div>
                    <div className='border-b-2 ml-40 w-[95px]  border-black'></div>
                </div>
                <div className="border-r-2 border-black   rounded-br-2xl h-52">

                    <div className='flex text-xl font-semibold pt-4  text-justify w-70 mr-6 ml-16'>To utilize the opportunity that the limitless sky offers by creating a technology-driven organization.</div>
                </div>

            </div>
        </div>
    )
}

export default Design