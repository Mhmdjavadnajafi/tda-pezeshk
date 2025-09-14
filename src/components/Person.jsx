import { useState } from "react";
import ToggleSelect from "./ToggleSelect";

const Persons = () => {
    const [active, setActive] = useState("formyself");

    const personsList = [
        { id: "formyself", text: "برای خودم" },
        { id: "foranother", text: "برای دیگری" },
    ];

    return (
        <ToggleSelect
            items={personsList}
            active={active}
            onChange={setActive}
        />
    );
};

export default Persons;
