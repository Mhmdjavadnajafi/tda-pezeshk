import { useState } from "react"
import DrugRegistrationDescription from "../components/DrugRegistrationDescription"
import TestHeader from "../components/HeaderTest"
import Medicine from "../components/medicine"
import MedicineSearch from "../components/medicineSearch"
// import SabtDaroo from "../components/registrationDaroo"
import RequestButton from "../components/RequestButton"
import LoaderProvider from "./LoaderProvider"
import { useNavigate } from "react-router-dom"

const DrugRegistration = () => {
    const [typeofmedicine, setTypeofmedicine] = useState('')
    const [nameofthedrug, setNameofthedrug] = useState('')
    const [drugDose, setdrugDose] = useState('')
    const [drugDescription, setDrugDescription] = useState('')
    const [selectDrug, setSelectDrug] = useState([])

    const isValid = typeofmedicine && nameofthedrug && drugDose && drugDescription;
    const navigate = useNavigate()

    return (
        <LoaderProvider>
            <div className="w-full text-[14px] text-gray-500 vazir-medium relative">
                <TestHeader title={'ثبت دارو'} onClick={() => navigate('/Pharmacy')} />
                <DrugRegistrationDescription />

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
                    valueTwo={drugDescription}
                    onChangeTwo={(e) => setDrugDescription(e.target.value)}
                    placeholderBoxOne={'دوز دارو'}
                    placeholderBoxTwo={'توضیحات / اختیاری'}
                />

                <SabtDaroo
                    bg={isValid ? 'bg-blue-500' : 'bg-gray-200'}
                    onClick={() => {
                        if (!isValid) return;
                        setSelectDrug(prev => [
                            ...prev,
                            { typeofmedicine, nameofthedrug, drugDose, drugDescription }
                        ]);
                        setTypeofmedicine('');
                        setNameofthedrug('');
                        setdrugDose('');
                        setDrugDescription('');
                    }}
                />

                {selectDrug.map((drug, index) => (
                    <Medicine
                        key={index}
                        medicineName={drug.nameofthedrug}
                        medicineDescription={drug.drugDescription}
                        delDrag={() => setSelectDrug(prev => prev.filter((_, i) => i !== index))}
                    />
                ))}

                <RequestButton onClick={() => navigate('/CompletDrug')} text={'ثبت درخواست'} />
            </div>
        </LoaderProvider>
    )
}

export default DrugRegistration
