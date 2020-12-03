import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'
import { animateScroll as scroll } from 'react-scroll'
import { Link as LinkScroll } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../config/settings'

const Navbar = ({ toggle }) => {
    //
    const [scrollNav, setScrollNav] = useState(false);
    const propNguoidung = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDung);
    const maLichChieu = useSelector(state => state.IdReducer.maLichChieu);
    
    let dispatch = useDispatch();


    const changeBackgroundNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackgroundNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    // load lên tài khoản đã lưu trong localStorage
    let user = {};
    if (localStorage.getItem(userLogin)) {
        user = JSON.parse(localStorage.getItem(userLogin));
    }

    // render btn đăng xuất
    const renderSignOutBtn = () => {
        return <>
            <NavLink to="/profile" className="nav-link-username">Xin chào {user.taiKhoan}</NavLink>
            <button onClick={()=>{
                user = localStorage.removeItem(userLogin);
                dispatch({
                    type: 'RESET',
                    payload: maLichChieu
                })
            }}><GrLogout></GrLogout></button>
        </>
    }

    return (
        <>
            <nav className={scrollNav ? 'nav-default' : 'nav-scroll'}>
                <div className="navbar-container">
                    <NavLink to="/" onClick={toggleHome} duration={500}><img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="" /></NavLink>
                    <div className="nav-icon" onClick={toggle}>
                        <FaBars></FaBars>
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="phim"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >Phim</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="rap"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >Rạp</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="khuyenmai"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >Khuyến mãi</LinkScroll>
                        </li>
                        <li className="nav-item">
                            <LinkScroll className="nav-linkScroll"
                                to="lienhe"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-270}
                            >Liên hệ</LinkScroll>
                        </li>
                    </ul>
                    <div className="nav-btn">
                        {
                            user.taiKhoan ?
                                renderSignOutBtn()
                                :
                                <NavLink to="/signin"><button>Đăng nhập</button></NavLink>
                        }
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
