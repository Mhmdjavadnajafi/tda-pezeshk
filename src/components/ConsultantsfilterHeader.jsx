import Rectangle from '../assets/images/Rectangle 5619.png'
const ConsultantsfilterHeader = () => {
    return (
        <div className="w-[90%] gap-2 mx-auto text-gray-500 flex items-center justify-between">
            <div className="vazir-medium">با اعمال فیلتر تنها پزشکان مد نظر شما نمایش داده میشود</div>
            <img className='h-15 w-18' src={Rectangle}></img>
        </div>
    )
}
export default ConsultantsfilterHeader