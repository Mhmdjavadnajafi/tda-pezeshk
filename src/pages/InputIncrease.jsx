const InputIncrease = ({onChange,value})=>{
    return(
      <div>
            <div className="w-[100%] h-13 border border-gray-200 rounded-2xl mt-3 flex items-center justify-between px-4 vazir-medium">
                <input value={value} onChange={onChange} type="number" className="w-4/5 h-full outline-0" placeholder="مثال : 250.000"></input>
                <div className="text-gray-600">تومان</div>
            </div>
            <div className="flex justify-center items-center">

            </div>
      </div>
    )
}
export default InputIncrease