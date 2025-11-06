import { useNavigate } from "react-router-dom";
import TestHeader from "../components/HeaderTest";
import LoaderProvider from "./LoaderProvider";
import BorderGeneral from "../components/BordergeneralTest";
import Anatomy from "../components/anatomy";
import RequestButton from "../components/RequestButton";
import UltrasoundTextTitle from "../components/UltrasoundTextTitle";
import CompleteTitle from "../components/CompleteTitle";
import UltrasoundSelector from "../components/UltrasoundSelector";
import LocationofPain from "../components/locationofpain";
import React, { useState } from "react";

const TriagePage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);
    const isValid = selected.length > 0;

    return (
        <LoaderProvider>
            <TestHeader title={"تریاژ"} onClick={() => navigate("/content")} />
            <CompleteTitle title={"موقعیت بدن"} />
            <LocationofPain />
            <UltrasoundTextTitle />
            <UltrasoundSelector selected={selected} onChange={setSelected} />
            <BorderGeneral />
            <Anatomy />
            <RequestButton
                onClick={() => { if (isValid) navigate("/CompTriage"); }}
                bg={isValid ? "bg-[#006ECF]" : "bg-gray-200"}
                color={isValid ? "text-white" : "text-gray-500"}
                text={"ثبت درخواست"}
            />
        </LoaderProvider>
    );
};

export default TriagePage;
