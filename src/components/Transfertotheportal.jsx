import ButtonSubmit from "./ButtonSubmit"

const Transfertotheportal = ({onClick,text})=>{
    return(
        <div className='w-full mx-auto h-18 flex items-center'>
            <div className='w-[100%] mx-auto'>
                <ButtonSubmit onClick={onClick} borderColor={'border-blue-600'} bg={'bg-blue-600'} color={'text-white'} text={text}></ButtonSubmit>
            </div>
        </div>
    )
}
export default Transfertotheportal