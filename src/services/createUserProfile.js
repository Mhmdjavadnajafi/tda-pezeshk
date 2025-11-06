// services/createUserProfile.js
import axios from "axios";

const createUserProfile = async ({ fullName, nationalCode, gender, accessToken }) => {
    const response = await axios.post(
        "https://api.tda24.ir/users/profile/",
        { fullName, nationalCode, gender },
        { headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
};

export default createUserProfile;
