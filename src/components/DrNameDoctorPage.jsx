const DrInformationDoctorPage = ({name,exp})=>{
    return(
        <div className="w-[90%] mx-auto my-4">
            <div className="vazir-medium text-lg">{name}</div>
            <div className="vazir-medium mt-1 text-sm text-[#676767]">{exp}</div>
        </div>
    )
}
export default DrInformationDoctorPage