import { useState } from "react";
import ToggleSelect from "./ToggleSelect";

const LocationofPain = () => {
    const [active, setActive] = useState("");

    const location = [
        { id: "forward", text: "رو به جلو" },
        { id: "behindthehead", text: "پشت سر" },
    ];

    return (
        <ToggleSelect
            items={location}
            active={active}
            onChange={setActive}
        />
    );
};

export default LocationofPain;
