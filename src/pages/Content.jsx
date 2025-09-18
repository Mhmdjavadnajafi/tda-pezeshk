import React from "react";
import SearchBox from "../components/SearchBox";
import HeaderContent from "../components/HeaderContent";
import Categorys from "../components/Categorys";
import DoctorsBox from "../components/DoctorsBox";
import Test from "../components/test";
import Expertises from "../components/expertises";
import DiseasesContainer from "../components/diseases";
import TestSelector from "../components/TestSelector";
import Navbar from "../layouts/Navbar";
import LoaderProviderMotion from "../pages/LoaderProvider";
const Content = ()=>{
    return(
        <LoaderProviderMotion>
            <div className="w-[100%] mx-auto mt-5">
                <HeaderContent />
                <Categorys />
                <Test />
                <Expertises />
                <DoctorsBox />
                <DiseasesContainer />
                <TestSelector />
                <Navbar />
            </div>
        </LoaderProviderMotion>
    )
}
export default Content