import axios from "axios";

const OtpVerify = async ({ phoneNumber, otp}) => {
    try {
        const response = await axios.post(
            "https://api.tda24.ir/users/otp-verify/",
            { phoneNumber, otp },
            { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export default OtpVerify;
