import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'
import HomeContent from '../../components/Contents/HomeContent'


const TrangChu = (props) => {
    // tạo useState để thiết lập trạng thái khi click vào icon ở Navbar
    const [isOpen, setIsOpen] = useState(false);

    // 
    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="home-page">
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle} ></Navbar>
            <HeroSection></HeroSection>
            <HomeContent></HomeContent>
            <Footer></Footer>
        </div>
    )
}

export default TrangChu