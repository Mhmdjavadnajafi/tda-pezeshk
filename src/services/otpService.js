import axios from 'axios';
const OtpService = async({phoneNumber})=>{
    const request = await axios.post('https://api.tda24.ir/users/otp-send/', {phoneNumber})
    return request
}
export default OtpService
