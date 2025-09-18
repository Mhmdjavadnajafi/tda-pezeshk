const MedicineSearch = ({ placeholderBoxOne, placeholderBoxTwo,onChangeOne,onChangeTwo}) => {
    return (
        <div className="w-[90%] mx-auto flex justify-center items-center gap-2 my-3">
            <input type="text" className="h-[51px] bg-gray-200 w-2/5 rounded-2xl text-[14px] text-center" placeholder={placeholderBoxOne} onChange={onChangeOne} />
            <input type="text" className="h-[51px] bg-gray-200 w-4/5 rounded-2xl text-[14px] px-3" placeholder={placeholderBoxTwo} onChange={onChangeTwo} />
        </div>
    )
}
export default MedicineSearch;
