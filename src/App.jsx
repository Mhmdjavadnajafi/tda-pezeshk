import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoaderProvider from "./pages/LoaderProvider";
import Registration from "./pages/Registration";
import Content from "./pages/Content";
import Test from "./pages/test";
import GeneralTest from "./pages/GeneralTest";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CheckUp from "./components/CheckUp";
import DefaultTest from "./components/defultTest";
import Completetheapplication from "./pages/CompletetheapplicationTestOne";
import CompletetheapplicationTwo from "./pages/CompletetheapplicationTestTwo";
import Payment from "./pages/payment";
import LoginApp from "./pages/Login";
import Pharmacy from "./pages/pharmacy";
import DrugRegistration from "./pages/Drugregistration";
import CompletingthedrugRequest from "./pages/CompletingthedrugRequest";
import PaymentDrug from "./pages/paymentDrug";
import Buymedicine from "./pages/Buymedicine";
import Inventoryincrease from "./pages/Inventoryincrease";
import Frequentlyaskedquestions from "./pages/Frequentlyaskedquestions";
import Rulesandregulations from "./pages/Rulesandregulations";
import DoctorPage from "./pages/Doctorpage"
import Medicalspecialties from "./pages/Medicalspecialties";
import DoctorPayment from "./pages/DoctorPayment";
import Consultantsfilter from "./pages/Consultantsfilter";
import CompleteDrug from "./pages/ComplateDrug";
import Paraclinic from "./pages/ParaClinic";
import Ultrasound from "./pages/Ultrasound";
import ComplateUltrasound from "./pages/ComplateUltrasound";
import PaymentUltrasound from "./pages/paymentUltrasound";
import Triage from "./components/Triage";
import TriagePage from "./pages/triage";
import CompletetheapplicationTriageOne from "./pages/CompletetheapplicationTriageOne";
import ConversationWithTDA from "./pages/ConversationWithTDA";
import Medicalrecord from "./components/Medicalrecord";
export default function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Medicalrecord />} />
          <Route path="/CheckTest" element={<GeneralTest />}>
            <Route index element={<DefaultTest />} />
            <Route path="CheckUp" element={<CheckUp />} />
            <Route path="men-health" element={<div>سلامت مردان</div>} />
            <Route path="women-health" element={<div>سلامت زنان</div>} />
            <Route path="children-health" element={<div>سلامت کودکان</div>} />
            <Route path="heart" element={<div>چکاپ قلب</div>} />
            <Route path="diabetes" element={<div>دیابت</div>} />
            <Route path="prevention" element={<div>پیشگیری و سلامت</div>} />
          </Route>
          <Route path="/register" element={<Registration />} />
          <Route path="/content" element={<Content />} />
          <Route path="/test" element={<Test />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/Complete" element={<Completetheapplication />} />
          <Route path="/Complete2" element={<CompletetheapplicationTwo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Drugregistration" element={<DrugRegistration />}></Route>
          <Route path="/Frequentlyaskedquestions" element={<Frequentlyaskedquestions />}></Route>
          <Route path="/Inventoryincrease" element={<Inventoryincrease />}></Route>
          <Route path="/Rulesandregulations" element={<Rulesandregulations/>}></Route>
          <Route path="/doctors" element={<Medicalspecialties/>}></Route>
          <Route path="/doctor" element={<DoctorPage />}></Route>
          <Route path="/doctorPayment" element={<DoctorPayment />}></Route>
          <Route path="/filter" element={<Consultantsfilter />}></Route>
          <Route path="/Pharmacy" element={<Pharmacy />}></Route>
          <Route path="/CompletingthedrugRequest" element={<CompletingthedrugRequest />}></Route>
          <Route path="/CompletDrug" element={<CompleteDrug />}></Route>
          <Route path="/paymentDrug" element={<PaymentDrug />}></Route>
          <Route path="/triage" element={<TriagePage />}></Route>
         <Route path="/CompTriage" element={<CompletetheapplicationTriageOne />}></Route> 
          <Route path="/paraclinic" element={<Paraclinic />}></Route>
          <Route path="/UltraSound" element={<Ultrasound />}></Route>
          <Route path="/compUltrasound" element={<ComplateUltrasound />}></Route>
          <Route path="/paymentUltrasound" element={<PaymentUltrasound />}></Route>
          <Route path="/chatbot" element={<ConversationWithTDA/>}/>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}
