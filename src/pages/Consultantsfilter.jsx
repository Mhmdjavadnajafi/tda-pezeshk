import ConsultantsfilterHeader from "../components/ConsultantsfilterHeader"
import Filters from "../components/filters"
import TestHeader from "../components/HeaderTest"
import LoaderProvider from "./LoaderProvider"

const Consultantsfilter = ()=>{
    return(
       <LoaderProvider>
            <div className="w-[100%] mx-auto relative">
                <TestHeader title={"فیلتر مشاوران"}></TestHeader>
                <ConsultantsfilterHeader />
                <Filters />
            </div>
       </LoaderProvider>
    )
}
export default Consultantsfilter