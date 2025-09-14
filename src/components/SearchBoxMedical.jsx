import SearchBox from "./SearchBox"
import SearchBtn from "./SearchButton"

const SearchBoxMedical = ()=>{
    return(
        <div className="w-[90%] mx-auto flex gap-4">
            <SearchBox/>
            <SearchBtn/>
        </div>
    )
}
export default SearchBoxMedical