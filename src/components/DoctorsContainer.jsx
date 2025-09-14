import DrCard from "./DrCard"

const DoctorsContainer = ()=>{
    return(
        <div className="py-8 w-full bg-gray-100 flex flex-col gap-6">
            <DrCard></DrCard>
            <DrCard></DrCard>
            <DrCard></DrCard>
            <DrCard></DrCard>
            <DrCard></DrCard>
        </div>
    )
}
export default DoctorsContainer