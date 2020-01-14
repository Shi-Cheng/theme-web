/**
 *  认证工具接口
 * @author panshicheng
 * @Date: 2019/8/16
 * @company Dingxuan
 */
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
// import packageObject from '../../package'
const key = '1234567890123456'
// const tokenKey = 'sc-user-token'
const loginNameKey = 'gz-user-name'
const roleKey = 'gz-role-key'
const userKey = 'sc-user'
const certKey = 'sc-cert'
const certCompanyKey = 'sc-company'
const routerArrKey = 'gz-router-key'
const TokenKey = 'theme_token'

export const getToken = () => {
  return Cookies.get(TokenKey)
  // return sessionStorage.getItem(`${tokenKey}-${packageObject.version}`)
}

export const setToken = (token) => {
  token = 'login-token'
  return Cookies.set(TokenKey, token)
  // return sessionStorage.setItem(`${tokenKey}-${packageObject.version}`, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export const getCert = () => {
  const cert = sessionStorage.getItem(`${certKey}`)
  return cert ? decryptedAES(cert, key) : null
}

export const setCert = (strCertID) => {
  return sessionStorage.setItem(`${certKey}`, encryptAES(JSON.stringify(strCertID), key))
}

export const removeCert = () => {
  return sessionStorage.removeItem(`${certKey}`)
}

export const getCompanyCert = () => {
  const cert = sessionStorage.getItem(`${certCompanyKey}`)
  return cert ? decryptedAES(cert, key) : null
}

export const setCompanyCert = (strCertID) => {
  return sessionStorage.setItem(`${certCompanyKey}`, encryptAES(JSON.stringify(strCertID), key))
}

export const removeCompanyCert = () => {
  return sessionStorage.removeItem(`${certCompanyKey}`)
}

// export const removeToken = () => {
//   return sessionStorage.removeItem(`${tokenKey}-${packageObject.version}`)
// }

export const setUser = (userInfo) => {
  return sessionStorage.setItem(`${userKey}`, encryptAES(JSON.stringify(userInfo), key))
}

export const getUser = () => {
  const userInfo = sessionStorage.getItem(`${userKey}`)
  return userInfo ? decryptedAES(userInfo, key) : null
}

export const removeUser = () => {
  return sessionStorage.removeItem(`${userKey}`)
}

export const setUserName = (userName) => {
  return Cookies.set(loginNameKey, userName)
}

export const getUserName = () => {
  return Cookies.get(loginNameKey)
}

export const setRole = (role) => {
  return Cookies.set(roleKey, role)
}

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString()
}

export const decryptedData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, key)
  return JSON.parse(bytes.toString())
}

export const getUserCompanyId = () => {
  return JSON.parse(Cookies.get(userKey)).companyid
}

export const encryptAES = (message) => {
  const keyHex = CryptoJS.enc.Utf8.parse(key)
  const encrypted = CryptoJS.AES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

export const decryptedAES = (message) => {
  const keyHex = CryptoJS.enc.Utf8.parse(key)
  const encryptedHexStr = CryptoJS.enc.Base64.parse(message)
  var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(encryptedBase64Str, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  var dec = decrypt.toString(CryptoJS.enc.Utf8)
  return dec.toString()
}

export const setRouter = (routerArr) => {
  return Cookies.set(routerArrKey, encryptData(routerArr))
}

export const getRouter = () => {
  const routerKey = Cookies.get(routerArrKey)
  return routerKey ? decryptedData(routerKey) : null
}

export const UkeyLogout = () => {
  this.$router.push('/login')
}
