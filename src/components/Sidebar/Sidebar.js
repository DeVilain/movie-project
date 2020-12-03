import React from 'react'
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import {GrLogout} from 'react-icons/gr'
import {userLogin} from '../../config/settings'

const Sidebar = ({ isOpen, toggle }) => {
    let user = {};
    if (localStorage.getItem(userLogin)) {
        user = JSON.parse(localStorage.getItem(userLogin));
    }

    const renderSignOutBtn = () => {
        return <>
            <LinkRoute to="/profile" className="side-link-username">Xin chào {user.taiKhoan}</LinkRoute>
            <button onClick={()=>{
                user = localStorage.removeItem(userLogin);
            }}><GrLogout></GrLogout></button>
        </>
    }

    return (
        <>
            <div className={isOpen ? 'sidebar-container-opened' : 'sidebar-container-default'} onClick={toggle}>
                <div className="icon">
                    <FaTimes className="close-icon" ></FaTimes>
                </div>
                <div className="sidebar-wrapper">
                    <ul>
                        <LinkScroll className="sidebar-link-scroll" to="phim" onClick={toggle}>Phim</LinkScroll>
                        <LinkScroll className="sidebar-link-scroll" to="rap" onClick={toggle}>Rạp</LinkScroll>
                        <LinkScroll className="sidebar-link-scroll" to="gioithieu" onClick={toggle}>Giới thiệu</LinkScroll>
                        <LinkScroll className="sidebar-link-scroll" to="lienhe" onClick={toggle}>Liên hệ</LinkScroll>
                    </ul>
                    <div className="sidebar-btn-wrap">
                        {
                            user.taiKhoan ? renderSignOutBtn() : <LinkRoute className="sidebar-btn" to="/signin">Đăng nhập</LinkRoute>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
