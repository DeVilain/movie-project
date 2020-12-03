import { dang_ky, dang_nhap } from '../types/QuanLyNguoiDungTypes'
import { userLogin, userSignup } from '../../config/settings'

let usLogin = {};
if (localStorage.getItem(userLogin)) {
    usLogin = JSON.parse(localStorage.getItem(userLogin));
}

let usSignup = {};
if (localStorage.getItem(userSignup)) {
    usSignup = JSON.parse(localStorage.getItem(userSignup));
}

const initialState = {
    nguoiDung: usLogin,
    nguoiDangKy: usSignup,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case dang_nhap:
            state.nguoiDung = action.nguoiDung;
            return {...state };
        case dang_ky:
            state.nguoiDangKy = action.nguoiDangKy;
            window.alert('Đăng ký thành công');
            return {...state };
        default:
            return state;
    }
}