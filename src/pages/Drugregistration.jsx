import { useState } from "react";
import DrugRegistrationDescription from "../components/DrugRegistrationDescription";
import TestHeader from "../components/HeaderTest";
import Medicine from "../components/medicine";
import MedicineSearch from "../components/medicineSearch";
import SabtDaroo from "../components/registrationDaroo";
import RequestButton from "../components/RequestButton";
import LoaderProvider from "./LoaderProvider";
import { useNavigate } from "react-router-dom";
import Type_of_drug_registration from "../components/Typeofdrugregistration";
import MedicineDescription from "../components/MedicineDescription";
import ImgMedicine from "../components/ImgMedicine";

const DrugRegistration = () => {
    const [typeofmedicine, setTypeofmedicine] = useState('');
    const [nameofthedrug, setNameofthedrug] = useState('');
    const [drugDose, setdrugDose] = useState('');
    const [drugDescription, setDrugDescription] = useState('');
    const [drugcount, setDrugCount] = useState('');
    const [selectDrug, setSelectDrug] = useState([]);
    const [typeDrug, setTypeDrug] = useState('text_drug');

    const navigate = useNavigate();

    const handleAddTextDrug = () => {
        if (!typeofmedicine || !nameofthedrug || !drugDose || !drugDescription) return;

        setSelectDrug(prev => [
            ...prev,
            {
                type: 'text_drug',
                typeofmedicine,
                nameofthedrug,
                drugDose,
                drugDescription
            }
        ]);

        setTypeofmedicine('');
        setNameofthedrug('');
        setdrugDose('');
        setDrugDescription('');
        setDrugCount('');
    };

    const handleAddImgDrug = (drug) => {
        setSelectDrug(prev => [...prev, drug]);
    };

    return (
        <LoaderProvider>
            <div className="w-full text-[14px] text-gray-500 vazir-medium relative">
                <TestHeader title={'ثبت دارو'} onClick={() => navigate('/Pharmacy')} />
                <DrugRegistrationDescription />
                <Type_of_drug_registration value={typeDrug} onChange={setTypeDrug} />

                {typeDrug === 'text_drug' ? (
                    <div>
                        <MedicineSearch
                            valueOne={typeofmedicine}
                            onChangeOne={(e) => setTypeofmedicine(e.target.value)}
                            valueTwo={nameofthedrug}
                            onChangeTwo={(e) => setNameofthedrug(e.target.value)}
                            placeholderBoxOne={'نوع دارو'}
                            placeholderBoxTwo={'نام دارو'}
                        />

                        <MedicineSearch
                            valueOne={drugDose}
                            onChangeOne={(e) => setdrugDose(e.target.value)}
                            valueTwo={drugcount}
                            onChangeTwo={(e) => setDrugCount(e.target.value)}
                            placeholderBoxOne={'دوز دارو'}
                            placeholderBoxTwo={'تعداد دارو'}
                        />

                        <MedicineDescription value={drugDescription} onChange={(e) => setDrugDescription(e.target.value)} />

                        <SabtDaroo
                            bg={typeofmedicine && nameofthedrug && drugDose && drugDescription ? 'bg-blue-500' : 'bg-gray-200'}
                            text={typeofmedicine && nameofthedrug && drugDose && drugDescription ? 'text-white' : ''}
                            onClick={handleAddTextDrug}
                        />
                    </div>
                ) : (
                    <div className="w-[100%] mx-auto mt-6">
                        <div className="w-[90%] mx-auto mb-2">
                            تصویر دارو به شکلی گرفته شود که نوع، نام و دوز دارو مشخص باشد.
                        </div>
                        <ImgMedicine onAddDrug={handleAddImgDrug} />
                    </div>
                )}

                {selectDrug.map((drug, index) => (
                    <Medicine
                        key={index}
                        medicineName={drug.nameofthedrug || ''}
                        medicineDescription={drug.drugDescription || drug.description || ''}
                        dose={drug.drugDose || drug.count || ''}
                        medicineType={drug.typeofmedicine || drug.type}
                        delDrag={() => setSelectDrug(prev => prev.filter((_, i) => i !== index))}
                    />
                ))}

                <RequestButton
                    color={selectDrug.length > 0 ? 'text-white' : ''}
                    bg={selectDrug.length > 0 ? 'bg-blue-500' : 'bg-gray-200'}
                    onClick={() => navigate('/CompletDrug')}
                    text={'ثبت درخواست'}
                />
            </div>
        </LoaderProvider>
    );
};

export default DrugRegistration;
