import { useNavigate } from "react-router-dom"
import SearchBox from "./SearchBox"
import SearchBtn from "./SearchButton"

const SearchBoxMedical = ()=>{
    const navigate = useNavigate('')
    return(
        <div className="w-[90%] mx-auto flex gap-4">
            <SearchBox/>
            <SearchBtn onClick={() => navigate('/filter')}/>
        </div>
    )
}
export default SearchBoxMedical