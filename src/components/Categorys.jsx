import React from "react";
import Triage from "./Triage";
import MothersEye from "./mothersEye";
import LeftBoxCategory from "./LeftboxCategory";
import IconsCategory from "./IconsCategory";
const Categorys = () => {
    return (
        <div>
            <div className="grid gap-1 mt-7 items-center justify-center grid-cols-12 w-[90%] mx-auto">
                <Triage></Triage>
                <LeftBoxCategory></LeftBoxCategory>
            </div>
            <IconsCategory></IconsCategory>
        </div>
    )
}
export default Categorys