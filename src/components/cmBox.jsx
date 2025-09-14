const CmBox = ({ text, icon }) => {
    return (
        <div className="w-1/5 h-[30px] px-2 gap-1 vazir-medium bg-[#F2F2F2] rounded-sm flex justify-center text-[10px] items-center text-[#676767]">
            <div className="text-[12px]">{icon}</div>
            <div>{text}</div>
        </div>
    )
}


export default CmBox