import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction';
const Signup = () => {

    let [dangKy, setDangKy] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: '',
        maLoaiNguoiDung: '',
        hoTen: ''
    });

    let dispatch = useDispatch();

    // xử lý thay đổi value input
    const handleChange = (e) => {
        let { name } = e.target;
        setDangKy({
            ...dangKy,
            [name]: e.target.value
        })
    }

    // xử lý submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(dangKyAction(dangKy));
    }

    return (
        <>
            <div className="signup-container">
                <div className="signup-wrapper container">
                    <Link className="signup-icon" to="/">CyberMovies</Link>
                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit}>
                            <h1>Đăng ký tài khoản</h1>
                            <div className="form-content row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Tài khoản</label>
                                        <input type="text" name="taiKhoan" className="form-control" onChange={handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <input type="password" name="matKhau" className="form-control" onChange={handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" onChange={handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <input type="text" name="soDt" className="form-control" onChange={handleChange} />

                                    </div>

                                </div>
                                <div className="form-col2 col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Mã nhóm</label>
                                        <br></br>
                                        <select name="maNhom" onChange={handleChange}>
                                            <option value="GP01">GP01</option>
                                            <option value="GP02">GP02</option>
                                            <option value="GP03">GP03</option>
                                            <option value="GP04">GP04</option>
                                        </select>
                                        <br />

                                    </div>
                                    <div className="form-group">
                                        <label>Mã loại người dùng</label>
                                        <br></br>
                                        <select name="maLoaiNguoiDung" onChange={handleChange}>
                                            <option value="khachHang">Khách hàng</option>
                                        </select>
                                        <br />

                                    </div>
                                    <div className="form-group">
                                        <label>Họ tên</label>
                                        <input type="text" name="hoTen" className="form-control" onChange={handleChange} />

                                    </div>
                                    <button type="submit">Đăng ký</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup
