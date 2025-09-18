import React from 'react';
import HeaderContent from "../components/HeaderContent";
import TestHeader from '../components/HeaderTest';
import ClassificationOfTests from '../components/ClassificationofTests';
import TestIMG from '../components/testImgTest';
import { useNavigate } from "react-router-dom";
import LoaderProvider from "../pages/LoaderProvider"; 

const Test = () => {
    const navigate = useNavigate();

    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto'>
                <TestHeader onClick={() => navigate('/content')} title={'آزمایش'} />
                <HeaderContent />
                <ClassificationOfTests />
                <TestIMG />
            </div>
        </LoaderProvider>
    );
};

export default Test;
