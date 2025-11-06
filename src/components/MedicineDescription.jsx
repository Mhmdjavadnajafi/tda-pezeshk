const MedicineDescription = ({onChange,value})=>{
    return(
        <div className="mx-auto w-[90%]">
            <input
                type="text"
                className="h-[51px] bg-gray-200 w-full mb-3 mx-auto rounded-2xl m-auto text-[14px] px-3"
                placeholder="توضیحات : اختیاری"
                value={value}
                onChange={onChange}
            />
       </div>
    )
}
export default MedicineDescription