import { useState } from "react";
import ToggleSelect from "./ToggleSelect";

const Type_of_drug_registration=({value,onChange})=>{
    const [active, setActive] = useState("text_drug");

    const DrugList = [
        { id: "text_drug", text: "نام متنی دارو" },
        { id: "img_drug", text: "تصویر دارو" },
    ];
    return (
        <ToggleSelect
            items={DrugList}
            active={value || active}
            onChange={onChange}
        />
    );
}   
export default Type_of_drug_registration