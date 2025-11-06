import axios from "axios";
import { getEncryptedCookie } from "../utils/cookieCrypto";

const UpdateInformation = ({ userUuid, fullName, aboutMe, gender = 'مرد', nationalCode, phoneNumber }) => {
    const token = getEncryptedCookie("auth").access; 
    return axios.put(
        `https://api.tda24.ir/users/profile/${userUuid}/`,
        {
            fullName: fullName,
            aboutMe: aboutMe,
            gender: gender,
            nationalCode: nationalCode,
            phoneNumber:phoneNumber
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then(res => console.log(res.status));
}

export default UpdateInformation;
