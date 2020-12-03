import React, { useCallback, useEffect, useState } from 'react'
import { qlPhimService } from '../../services/QuanLyPhimServices';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { userLogin } from '../../config/settings';
import { useDispatch } from 'react-redux';

const MovieDetail = ({ maPhim }) => {

    let user = {};
    if (localStorage.getItem(userLogin)) {
        user = JSON.parse(localStorage.getItem(userLogin));
    }
    console.log(user);
    // lưu trữ và thay đổi state thongTinPhim
    let [thongTinPhim, setThongTinPhim] = useState({});


    // lấy thông tin chi tiết phim
    const getThongTinPhim = useCallback(() => {
        qlPhimService.layChiTietPhim(maPhim).then(res => {
            console.log(res.data);
            setThongTinPhim(res.data);
        }).catch(err => {
            console.log(err.response.data);
        })
    }, [maPhim]);

    useEffect(() => {
        getThongTinPhim();
        window.scrollTo(0, 0);
    }, [getThongTinPhim]);

    // render đánh giá *
    const renderStarIcon = () => {
        let iconArray = [];
        for (let index = 0; index < thongTinPhim?.danhGia / 2; index++) {
            iconArray.push(<img key={index} src="https://tix.vn/app/assets/img/icons/star1.png" alt="" />);
        }
        return iconArray;
    }

    let dispatch = useDispatch();

    return (
        <>
            <section className="detail">
                <div className="detail__content">
                    <div className="detail__content__img">
                        <img src={thongTinPhim?.hinhAnh} alt="" />

                    </div>
                    <div className="container detail__title">
                        <div className="row">
                            <div className="col-md-3 detail__title__left">
                                <img src={thongTinPhim?.hinhAnh} alt="" />
                            </div>
                            <div className="col-md-5 col-sm-6 col-xs-6 detail__title__center">
                                <div className="detail__title__center__info">
                                    <span>C18</span>
                                    <span>{thongTinPhim?.tenPhim}</span>
                                    <p>120 phút - 0 IMDb - 2D/Digital/4DX/IMAX</p>
                                </div>
                                <button className="btn" onClick={() => { window.scrollTo(0, 1000) }}>Mua vé</button>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <div className="detail__title__right">
                                    <div className="detail__circle">
                                        <div className="detail__circle__border"></div>
                                        <span>{thongTinPhim?.danhGia}</span>
                                        <div className="detail__circle__slice">
                                            <div className="detail__circle__slice__bar" style={{ clip: `rect(0, ${thongTinPhim?.danhGia / 10}em, 1em, 0)` }} /></div>
                                    </div>
                                    <div className="detail__star mt-3">
                                        {(renderStarIcon())}
                                        <p>{Math.floor(Math.random() * 1000) + 1} người đánh giá</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="detail__info">
                        <div className="detail__info__menu text-center">
                            <span>Thông tin</span>
                        </div>
                        <div className="row detail__info__content container">
                            <div className="col-md-6 col-sm-12">
                                <div className="row detail__info__categories">
                                    <div className="col-5">
                                        <span>Ngày khởi chiếu</span>
                                    </div>
                                    <div className="col-7">
                                        <p>{thongTinPhim?.ngayKhoiChieu}</p>
                                    </div>
                                </div>
                                <div className="row detail__info__categories">
                                    <div className="col-5">
                                        <span>Đạo diễn</span>
                                    </div>
                                    <div className="col-7">
                                        <p>Yeon Sang-ho</p>
                                    </div>
                                </div>
                                <div className="row detail__info__categories">
                                    <div className="col-5">
                                        <span>Diễn viên</span>
                                    </div>
                                    <div className="col-7">
                                        <p>Danh hài Trường Giang</p>
                                    </div>
                                </div>
                                <div className="row detail__info__categories">
                                    <div className="col-5">
                                        <span>Thể Loại</span>
                                    </div>
                                    <div className="col-7">
                                        <p>Kinh dị</p>
                                    </div>
                                </div>
                                <div className="row detail__info__categories">
                                    <div className="col-5">
                                        <span>Định dạng</span>
                                    </div>
                                    <div className="col-7">
                                        <p>2D/Digital/4DX/IMAX</p>
                                    </div>
                                </div>
                                <div className="row detail__info__categories">
                                    <div className="col-5">
                                        <span>Quốc Gia SX</span>
                                    </div>
                                    <div className="col-7">
                                        <p>Hàn Quốc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 detail__info__description">
                                <span>Nội dung</span>
                                <p className="mt-4">{thongTinPhim?.moTa}</p>
                            </div>
                        </div>
                        {/*Load hệ thông rap, lịch chiếu */}
                        <div className="detail__showtime">

                            <div className="row container">
                                <div className="col-md-4 col-sm-4 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <h3> LỊCH CHIẾU </h3>
                                    {
                                        thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
                                            return <a key={index} style={{ display: "inline-block", width: '100%' }} className="nav-link" id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                <img src={heThongRap.logo} width={50} height={50} alt="" /> <span>{heThongRap.tenHeThongRap}</span>
                                            </a>

                                        })
                                    }

                                </div>
                                <div className="col-md-8 col-sm-8 tab-content" id="v-pills-tabContent">
                                    {
                                        thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
                                            return <div key={index} className="tab-pane fade show" id={`${heThongRap.maHeThongRap}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                {
                                                    heThongRap.cumRapChieu?.map((cumRap, index) => {
                                                        return <div key={index}>
                                                            <h3>{cumRap.tenCumRap}</h3>
                                                            <div className="row">
                                                                {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => { /* slice: duyệt 0 -> 12 */
                                                                    /* sử dụng thư viện moment để format lại thời gian theo ý thích */
                                                                    return <NavLink to={user.taiKhoan ? `/datve/${lichChieu.maLichChieu}` : `/signin`}
                                                                        className="showtime__link col-md-3 col-sm-4"
                                                                        key={index}
                                                                        onClick={() => {dispatch({
                                                                            type: 'GUI_MA',
                                                                            payload: lichChieu.maLichChieu,
                                                                        })}}>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                                                })}
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovieDetail
