import { MapContainer } from "react-leaflet"
import Chooseinsurance from "../components/Chooseinsurance"
import CompleteTitle from "../components/CompleteTitle"
import TestHeader from "../components/HeaderTest"
import MAP from "../components/Map"
import Medicinereceivingservice from "../components/Medicinereceivingservice"
import LoaderProvider from "./LoaderProvider"
import LocationUser from "../components/LocationUser"
import RequestButton from "../components/RequestButton"
const Buymedicine = ()=>{
    return (
        <LoaderProvider>
            <TestHeader title={"خرید دارو"}></TestHeader>
            <CompleteTitle title={"دریافت خدمات"} />
            <Medicinereceivingservice/>
            <LocationUser/>
            <RequestButton text={"ثبت درخواست"}/>
        </LoaderProvider>
    )
}
export default Buymedicine