import React from "react";
import { useState } from "react";
import ToggleSelect from "./ToggleSelect";

const YesNo = () => {
    const [active, setActive] = useState("yes");

    const yesNoList = [
        { id: "no", text: "خیر" },
        { id: "yes", text: "بله" },
    ];

    return (
        <ToggleSelect
            items={yesNoList}
            active={active}
            onChange={setActive}
        />
    );
};

export default YesNo;
