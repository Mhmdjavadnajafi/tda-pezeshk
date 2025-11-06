import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoaderProvider from "./pages/LoaderProvider";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./utils/ProtectedRoute";
import PublicRoute from "./utils/PublicRoute";
import HomeRedirect from "./utils/HomeRedirect";

import Registration from "./pages/Registration";
import LoginApp from "./pages/Login";
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
import Pharmacy from "./pages/pharmacy";
import DrugRegistration from "./pages/Drugregistration";
import CompletingthedrugRequest from "./pages/CompletingthedrugRequest";
import PaymentDrug from "./pages/paymentDrug";
import Buymedicine from "./pages/Buymedicine";
import Inventoryincrease from "./pages/Inventoryincrease";
import Frequentlyaskedquestions from "./pages/Frequentlyaskedquestions";
import Rulesandregulations from "./pages/Rulesandregulations";
import DoctorPage from "./pages/Doctorpage";
import Medicalspecialties from "./pages/Medicalspecialties";
import DoctorPayment from "./pages/DoctorPayment";
import Consultantsfilter from "./pages/Consultantsfilter";
import CompleteDrug from "./pages/ComplateDrug";
import Paraclinic from "./pages/ParaClinic";
import Ultrasound from "./pages/Ultrasound";
import ComplateUltrasound from "./pages/ComplateUltrasound";
import PaymentUltrasound from "./pages/paymentUltrasound";
import TriagePage from "./pages/triage";
import CompletetheapplicationTriageOne from "./pages/CompletetheapplicationTriageOne";
import ConversationWithTDA from "./pages/ConversationWithTDA";
import MedicalRecords from "./pages/Medicalrecords";
import Doctorconsultationhistory from "./pages/Doctorconsultationhistory";
import ParaClinicconsultationhistory from "./pages/ParaClinicconsultationhistory";
import InProgress from "./pages/inProgress";
import AmbulancePage from "./pages/Ambulance";
import NotFound from "./pages/NotFound";
import ComplateAmbulance from "./pages/ComplateAmbulance";
import PaymentAmbulance from "./pages/PaymentAmbulance";
import RequestCompTriage from "./pages/requestTriage";

export default function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomeRedirect />} />
            <Route path="/register" element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute>
                <LoginApp />
              </PublicRoute>
            } />
            <Route path="/content" element={
              <ProtectedRoute>
                <Content />
              </ProtectedRoute>
            } />
            <Route path="/test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
            <Route path="/CheckTest" element={<ProtectedRoute><GeneralTest /></ProtectedRoute>}>
              <Route index element={<DefaultTest />} />
              <Route path="CheckUp" element={<CheckUp />} />
              <Route path="men-health" element={<div>سلامت مردان</div>} />
              <Route path="women-health" element={<div>سلامت زنان</div>} />
              <Route path="children-health" element={<div>سلامت کودکان</div>} />
              <Route path="heart" element={<div>چکاپ قلب</div>} />
              <Route path="diabetes" element={<div>دیابت</div>} />
              <Route path="prevention" element={<div>پیشگیری و سلامت</div>} />
            </Route>
            <Route path="/Complete" element={<ProtectedRoute><Completetheapplication /></ProtectedRoute>} />
            <Route path="/Complete2" element={<ProtectedRoute><CompletetheapplicationTwo /></ProtectedRoute>} />
            <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="/Drugregistration" element={<ProtectedRoute><DrugRegistration /></ProtectedRoute>} />
            <Route path="/Frequentlyaskedquestions" element={<ProtectedRoute><Frequentlyaskedquestions /></ProtectedRoute>} />
            <Route path="/Inventoryincrease" element={<ProtectedRoute><Inventoryincrease /></ProtectedRoute>} />
            <Route path="/Rulesandregulations" element={<ProtectedRoute><Rulesandregulations /></ProtectedRoute>} />
            <Route path="/doctors" element={<ProtectedRoute><Medicalspecialties /></ProtectedRoute>} />
            <Route path="/doctor" element={<ProtectedRoute><DoctorPage /></ProtectedRoute>} />
            <Route path="/doctorPayment" element={<ProtectedRoute><DoctorPayment /></ProtectedRoute>} />
            <Route path="/filter" element={<ProtectedRoute><Consultantsfilter /></ProtectedRoute>} />
            <Route path="/Pharmacy" element={<ProtectedRoute><Pharmacy /></ProtectedRoute>} />
            <Route path="/CompletingthedrugRequest" element={<ProtectedRoute><CompletingthedrugRequest /></ProtectedRoute>} />
            <Route path="/CompletDrug" element={<ProtectedRoute><CompleteDrug /></ProtectedRoute>} />
            <Route path="/paymentDrug" element={<ProtectedRoute><PaymentDrug /></ProtectedRoute>} />
            <Route path="/triage" element={<ProtectedRoute><TriagePage /></ProtectedRoute>} />
            <Route path="/CompTriage" element={<ProtectedRoute><CompletetheapplicationTriageOne /></ProtectedRoute>} />
            <Route path="/paraclinic" element={<ProtectedRoute><Paraclinic /></ProtectedRoute>} />
            <Route path="/UltraSound" element={<ProtectedRoute><Ultrasound /></ProtectedRoute>} />
            <Route path="/compUltrasound" element={<ProtectedRoute><ComplateUltrasound /></ProtectedRoute>} />
            <Route path="/paymentUltrasound" element={<ProtectedRoute><PaymentUltrasound /></ProtectedRoute>} />
            <Route path="/chatbot" element={<ProtectedRoute><ConversationWithTDA /></ProtectedRoute>} />
            <Route path="/Ambulance" element={<ProtectedRoute><AmbulancePage /></ProtectedRoute>} />
            <Route path="/Medicalrecords" element={<ProtectedRoute><MedicalRecords /></ProtectedRoute>} />
            <Route path="/Inprogress" element={<ProtectedRoute><InProgress /></ProtectedRoute>} />
            <Route path="/Doctorconsultationhistory" element={<ProtectedRoute><Doctorconsultationhistory /></ProtectedRoute>} />
            <Route path="/ParaClinicconsultationhistory" element={<ProtectedRoute><ParaClinicconsultationhistory /></ProtectedRoute>} />
            <Route path="/ComplateAmbulance" element={<ComplateAmbulance />} />
            <Route path="/PaymentAmbulance" element={<PaymentAmbulance />} />
            <Route path="/requestCompTriage" element={<RequestCompTriage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </LoaderProvider>
  );
}
