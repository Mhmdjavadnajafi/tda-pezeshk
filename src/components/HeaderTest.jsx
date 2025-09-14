import { LuArrowRight } from "react-icons/lu";
const TestHeader = ({title,onClick}) => {
    return (
        <div className='w-full py-4 sticky border-gray-300 bg-white shadow-md top-0 z-100 border-b top-0 mb-5 mx-auto'>
            <div className="w-[90%] mx-auto flex relative justify-center items-center">
                <LuArrowRight onClick={onClick} className='absolute text-2xl right-0' />
                <div className='vazir-medium text-xl text-[#262626]'>{title}</div>
          </div>
        </div>
    )
}
export default TestHeader;