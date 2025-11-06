const MedicineSearch = ({
    placeholderBoxOne,
    placeholderBoxTwo,
    onChangeOne,
    onChangeTwo,
    valueOne,
    valueTwo
}) => {
    return (
        <div className="w-[90%] mx-auto flex justify-center items-center gap-2 my-3">
            <input
                type="text"
                value={valueOne}
                onChange={onChangeOne}
                className="h-[51px] bg-gray-200 w-2/5 rounded-2xl text-[14px] text-center"
                placeholder={placeholderBoxOne}
            />
            <input
                type="text"
                value={valueTwo}
                onChange={onChangeTwo}
                className="h-[51px] bg-gray-200 w-4/5 rounded-2xl text-[14px] px-3"
                placeholder={placeholderBoxTwo}
            />
        </div>
    )
}

export default MedicineSearch
