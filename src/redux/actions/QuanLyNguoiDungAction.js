import axios from 'axios'
import { dang_ky, dang_nhap } from '../types/QuanLyNguoiDungTypes'
import { userLogin, accessToken, domain, userSignup } from '../../config/settings'

export const dangNhapAction = ({ taiKhoan, matKhau }) => {
    return dispatch => {
        axios({
            url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: { taiKhoan, matKhau }
        }).then(result => {
            console.log(result.data)
                //Lưu thông tin đăng nhập vào local storage
            localStorage.setItem(userLogin, JSON.stringify(result.data));
            //Lưu thông tin token vào localStorage
            localStorage.setItem(accessToken, result.data.accessToken);
            dispatch({
                type: dang_nhap,
                nguoiDung: result.data
            })
        }).catch(error => {
            console.log(error.response.data)
        });
    }
}

export const dangKyAction = ({ taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen }) => {
    return dispatch => {
        axios({
            url: `${domain}/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen }
        }).then(result => {
            console.log(result.data);
            // lưu thông tin đăng ký vào localStorage
            localStorage.setItem(userSignup, JSON.stringify(result.data));
            //
            dispatch({
                type: dang_ky,
                nguoiDangKy: result.data
            })
        }).catch(err => {
            console.log(err.response.data);
            window.alert(err.response.data);
        });
    }
}