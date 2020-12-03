import React from 'react'

// import styled-components
import {ServicesCard,ServicesContainer,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper} from './ServicesElements'

// import icons


const Services = () => {
    return (
        <ServicesContainer id="khuyenmai">
            <ServicesH1>Khuyến mãi</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-1.svg" ></ServicesIcon>
                    <ServicesH2>Giảm 30% combo bắp nước</ServicesH2>
                    <ServicesP>Nhanh tay tải ngay App</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-1.svg" ></ServicesIcon>
                    <ServicesH2>Giảm 50% giá vé</ServicesH2>
                    <ServicesP>Khi đặt qua ZaloPay</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-1.svg" ></ServicesIcon>
                    <ServicesH2>Tặng vé miễn phí</ServicesH2>
                    <ServicesP>Khi đặt từ 5 vé trở lên</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
