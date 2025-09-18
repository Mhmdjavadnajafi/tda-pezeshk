import LoaderProvider from "../pages/LoaderProvider";
import HeaderContent from "./HeaderContent";
import TestHeader from "./HeaderTest";

const Medicalrecord = ()=>{
    return(
        <LoaderProvider>
            <TestHeader title={'پرونده پزشکی'}></TestHeader>
        </LoaderProvider>
    )
}
export default Medicalrecord;