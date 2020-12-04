import Axios from 'axios';
import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { domain, userLogin } from '../../config/settings';
import { qlPhimService } from '../../services/QuanLyPhimServices';

const DatVe = (props) => {

    let [thongTinPhongVe, setThongTinPhongVe] = useState([]);
    let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);

    //console.log(props);
    const getThongTinPhongVe = useCallback(() => {
        qlPhimService.layChiTietPhongVe(props.match.params.maLichChieu).then(result => {
            console.log(result.data);
            setThongTinPhongVe(result.data);
        }).then(err => {
            //console.log(err.response.data);
        })
    }, [props.match.params.maLichChieu]);

    useEffect(() => {
        getThongTinPhongVe();
    }, [getThongTinPhongVe]);

    const datGhe = (ghe) => {
        // ghế đang đặt
        let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        // kiểm tra ghế được click có trong mảng thì remove ra, chưa có thì push vào
        if (indexGhe !== -1) {
            danhSachGheDangDat.splice(indexGhe, 1);
        } else {
            danhSachGheDangDat.push(ghe);
        }
        let danhSachGheUpdate = [...danhSachGheDangDat];
        setDanhSachGheDangDat(danhSachGheUpdate);

    }


    const datVe = () => {
        let usLogin = {}
        if (localStorage.getItem(userLogin)) {
            usLogin = JSON.parse(localStorage.getItem(userLogin));
        }
        let obDatVe = {
            "maLichChieu": props.match.params.maLichChieu,
            "danhSachVe": danhSachGheDangDat,
            "taiKhoanNguoiDung": usLogin.taiKhoan
        }
        Axios({
            url: `${domain}/api/QuanLyDatVe/DatVe`,
            method: 'POST',
            data: obDatVe,
            headers: { // gửi header về backend
                'Authorization': `Bearer ${usLogin.accessToken}` // cú pháp bắt buộc
            }
        }).then(res => {
            console.log(res.data);
            window.alert('Đặt vé thành công');
        }).catch(err => {
            console.log(err.response.data);
        })
        
    }

    //console.log(danhSachGheDangDat);


    const renderBangGia = () => {
        let dsGheDangDat = danhSachGheDangDat;
        console.log(dsGheDangDat);
        return dsGheDangDat.map((ghe, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ghe.tenGhe}</td>
                    <td>{ghe.giaVe}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div className="container-fluid mt-4">
                <NavLink to="/" style={{ fontSize: '30px', textDecoration: 'none', fontWeight: 'bold' }}>CyberMovies</NavLink>
                <div className="col-md-12 col-sm-12">
                    <h3 className="text-center">Màn hình</h3>
                    <div className="text-center">
                        {/* Load danh sách ghế */}
                        {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                            // lấy class trong scss
                            let classLoaiGhe = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';

                            // Nếu ghế được người khác đặt thì render ra button đỏ
                            if (ghe.daDat) {
                                return <Fragment key={ghe.stt}>
                                    <button disabled className={`text-center ghe gheDaDat`}>X</button>
                                    {(index + 1) % 16 === 0 ? <br /> : ''} {/* Chia 1 hàng gồm 16 ghế */}
                                </Fragment>
                            }

                            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
                            let classGheDangDat = indexGheDangDat !== -1 ? 'gheDangDat' : '';

                            // Nếu ghế chưa đặt thì render ra ghế thường
                            return <Fragment key={ghe.stt}>
                                <button className={`text-center ghe ${classLoaiGhe} ${classGheDangDat}`} onClick={() => {
                                    datGhe(ghe);
                                }}>{ghe.stt}</button>
                                {(index + 1) % 10 === 0 ? <br /> : ''} {/* Chia 1 hàng gồm 16 ghế */}
                            </Fragment>
                        })}
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <h3>Thông tin phim</h3>
                    <div>
                        {
                            thongTinPhongVe.thongTinPhim?.tenPhim
                        }
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Số ghế</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderBangGia()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2" className="text-right">Tổng tiền:</td>
                                    <td>{danhSachGheDangDat.reduce((sum, ghe, index) => {
                                        return sum += ghe.giaVe;
                                    }, 0)}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <button className="btn btn-info" onClick={datVe}>Đặt vé</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DatVe
