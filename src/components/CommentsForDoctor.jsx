import CommentUser from "./commentUser"
import { IoIosArrowBack } from "react-icons/io";
const Comments = ()=>{
    return(
        <div className="w-[90%] mx-auto ">
            <div className="vazir-medium text-lg font-bold">نظرات کاربران</div>
           <div className="mt-3 relative">
                <CommentUser username={'اشکان حسنوندی'} type={' مشاوره متنی'} commentText={'بسیار دکتر با حوصله و خوبیه'} date={"17 شهریور 1404"}></CommentUser>
                <CommentUser username={'اشکان حسنوندی'} type={' مشاوره متنی'} commentText={'بسیار دکتر با حوصله و خوبیه'} date={"17 شهریور 1404"}></CommentUser>
                <CommentUser username={'اشکان حسنوندی'} type={' مشاوره متنی'} commentText={'بسیار دکتر با حوصله و خوبیه'} date={"17 شهریور 1404"}></CommentUser>
                <div className="text-blue-600 absolute text-xl mt-5 pb-30 left-0 vazir-medium flex justify-center items-center">نمایش بیشتر <IoIosArrowBack /></div>
           </div>
        </div>
    )
}
export default Comments