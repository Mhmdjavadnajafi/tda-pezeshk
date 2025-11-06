import React, { useEffect, useState } from "react";
import ProfileIMG from "./ProfileImg";
import Ellipse from '../assets/images/Ellipse 41.png';
import ProfileHeaderUserName from "./ProfileHeaderUserName";
import axios from "axios";
import { getEncryptedCookie } from "../utils/cookieCrypto";

const ProfileHeaderInformation = () => {
    const [user, setUser] = useState({ fullName: '', nationalCode: '', inventory: '0' });
    const [userUuid, setUserUuid] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const authData = getEncryptedCookie("auth");
                const token = authData?.access;
                if (!token) return;

                const response = await axios.get("https://api.tda24.ir/users/profile/", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.data?.success && Array.isArray(response.data.data) && response.data.data.length > 0) {
                    const profile = response.data.data[0];
                    setUser({
                        fullName: profile.fullName || '',
                        nationalCode: profile.nationalCode || '',
                        inventory: profile.inventory || '0'
                    });
                    setUserUuid(profile.userUuid || '');
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="flex items-center gap-3">
            <ProfileIMG src={Ellipse} />
            <ProfileHeaderUserName name={user.fullName} inventory={user.inventory} />
        </div>
    );
};

export default ProfileHeaderInformation;
