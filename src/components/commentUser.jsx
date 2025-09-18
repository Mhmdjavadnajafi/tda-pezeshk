import { FaRegStar } from "react-icons/fa6";

const CommentUser = ({username,type,startCount,commentText,date})=>{
    return (
        <div className="w-full border-b border-gray-300 pb-2 mt-5" id="comment">
            <div className="flex justify-between items-center">
                <div className="vazir-medium">
                    <div className="flex items-center justify-center gap-1">
                        <div className="text-gray-600">{username} / </div><div className="text-orange-400">{type}</div>
                    </div>
                </div>
                <div className="flex gap-1 text-orange-400 text-xl">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                </div>
            </div>
            <div className="text-gray-600 vazir-medium mt-2">{commentText}</div>
            <div className="text-gray-600 vazir-medium mt-6">{date}</div>
        </div>
    )   
}
export default CommentUser