import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';

const SignIn = ({ props }) => {

    let [state, setState] = useState({
        taiKhoan: '',
        matKhau: '',
    });

    const maLichChieu = useSelector(state => state.IdReducer.maLichChieu);

    let dispatch = useDispatch();

    // lấy thông tin người dùng khi đã đăng nhập thành công
    const propNguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDung);

    // xử lý thay đổi value input
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        })
    }

    // xử lý submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(dangNhapAction(state));
        maLichChieu ? props.history.push(`/datve/${maLichChieu}`) : props.history.push(`/`);
    }

    return (
        <>
            <div className="signin-container">
                <div className="form-wrapper">
                    <Link className="signin-icon" to="/" >CyberMovies</Link>
                    <div className="form-content">
                        <form onSubmit={handleSubmit}>
                            <h1>Đăng nhập tài khoản</h1>
                            <label htmlFor="for">Tài khoản</label>
                            <input
                                name="taiKhoan"
                                onChange={handleChange}
                                required></input>
                            <label htmlFor="for">Mật khẩu</label>
                            <input type="password"
                                name="matKhau"
                                onChange={handleChange}
                                required></input>
                            <button type="submit">Đăng nhập</button>
                            <span>Quên mật khẩu?</span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
