const DrDetailBox = ({bg,color,title,value}) => {
    return (
        <div className="col-span-4 flex flex-col items-center gap-1 text-center">
            <div className={`w-full h-6 rounded ${bg} text-[14px] ${color} flex justify-center items-center`}>{value}</div>
            <div className="text-[10px] vazir-medium text-[#676767]">{title}</div>
        </div>
    )
}
export default DrDetailBox