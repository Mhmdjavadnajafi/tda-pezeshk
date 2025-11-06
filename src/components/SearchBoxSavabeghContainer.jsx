import React, { useState } from "react";
import SearchBoxSavabegh from "./SearchBoxSavabegh";
import SearchBtn from "./SearchButton";

const SearchBoxSavabeghContainer = () => {
    const [len, setLen] = useState(0);

    return (
        <div className="relative w-[90%] mx-auto flex gap-4">
           <SearchBoxSavabegh/>
           <SearchBtn/>
        </div>
    );
};

export default SearchBoxSavabeghContainer;