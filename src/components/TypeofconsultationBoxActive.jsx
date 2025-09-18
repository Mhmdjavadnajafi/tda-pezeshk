import { IoIosArrowBack } from "react-icons/io";
const TypeofconsultationBoxActive = ({icon,name,description,visitPrice,isActive})=>{
    return(
        <div className="w-full h-[130px] border border-gray-600 rounded-2xl flex flex-col justify-between py-2 shadow-xl mt-5">
            <div className="flex items-center justify-between w-[90%] mx-auto border-b border-gray-200 pb-4 relative">
               <div className="flex items-center gap-3">
                    <div className="text-2xl text-gray-600">{icon}</div>
                    <div>
                        <div className="text-black vazir-medium text-bold text-xl">{name}</div>
                        <div className="text-[#676767] vazir-medium mt-1">{description}</div>
                    </div>
               </div>
               <div className="text-green-500 text-lg vazir-medium absolute top-1 left-0">
                فعال
               </div>
            </div>
            <div className="w-[90%] mx-auto flex justify-between items-center py-[0.1rem]">
                <div className="vazir-medium text-gray-700 text-md">ویزیت {visitPrice} تومان</div>
                <div className="flex gap-2 vazir-medium text-blue-600 items-center text-md">شروع مشاوره <IoIosArrowBack /></div>
            </div>
        </div>
    )
}
export default TypeofconsultationBoxActive