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
const Content = ()=>{
    return(
        <div className="w-[100%] mx-auto mt-10">
            <HeaderContent></HeaderContent>
            <Categorys></Categorys>
            <Test></Test>
            <Expertises></Expertises>
            <DoctorsBox></DoctorsBox>
            <DiseasesContainer></DiseasesContainer>
            <TestSelector></TestSelector>
            <Navbar></Navbar>
        </div>
    )
}
export default Content