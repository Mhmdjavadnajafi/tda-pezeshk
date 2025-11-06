import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_ENC_KEY;  

export const setEncryptedCookie = (name, value, options = {}) => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString();
  let cookieStr = `${name}=${encodeURIComponent(encrypted)}`;
  if (options.expires) {
    const d = new Date();
    d.setTime(d.getTime() + options.expires * 24 * 60 * 60 * 1000);
    cookieStr += `; expires=${d.toUTCString()}`;
  }
  document.cookie = cookieStr + "; path=/";
};

export const getEncryptedCookie = (name) => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find(c => c.startsWith(name + "="));
  if (!cookie) return null;
  const value = decodeURIComponent(cookie.split("=")[1]);
  if (!value) return null;
  try {
    const bytes = CryptoJS.AES.decrypt(value, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) return null;
    return JSON.parse(decrypted);
  } catch (err) {
    console.error("Failed to decrypt cookie", err, { value });
    return null;
  }
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/`;
};
