import AnatomyImg from '../assets/images/0 626984700.png'
const Anatomy = ()=>{
    return(
        <div className="h-[683px] w-[90%] mx-auto relative pb-20">
            <img className='h-full w-full' src={AnatomyImg}></img>
            <div className='absolute top-8 left-1 flex flex-col items-center vazir-medium text-gray-300'>
                <div>سمت راست</div>
                <div>بدن</div>
            </div>
            <div className='absolute top-8 right-1 flex flex-col items-center vazir-medium text-gray-300'>
                <div>سمت چپ</div>
                <div>بدن</div>
            </div>
        </div>
    )
}
export default Anatomy