const Faciliti = ({name,flex,text="text-[0.9rem]"})=>{
    return(
        <div className={`vazir-medium ${text} text-center text-gray-500 rounded-lg bg-gray-200 px-[0.4rem] ${flex} py-2`}>{name}</div>
    )
}
export default Faciliti