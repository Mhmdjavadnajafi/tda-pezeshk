const SabtDaroo = ({onClick,bg,text})=>{
    return(
        <button onClick={onClick} className={`w-[90%] h-14 text-[14px] vazir-medium ${text} block ${bg} mx-auto rounded-xl flex justify-center items-center`}>ثبت دارو</button>
    )
}
export default SabtDaroo