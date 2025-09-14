import ConsultantsfilterHeader from "../components/ConsultantsfilterHeader"
import Filters from "../components/filters"
import TestHeader from "../components/HeaderTest"

const Consultantsfilter = ()=>{
    return(
        <div className="w-[100%] mx-auto relative">
            <TestHeader title={"فیلتر مشاوران"}></TestHeader>
            <ConsultantsfilterHeader/>
            <Filters/>
        </div>
    )
}
export default Consultantsfilter