import axios from 'axios';
import { domain, groupID, groupID2 } from '../config/settings'

export class QuanLyPhimServices {

    layDanhSachPhim = () => {
        return axios({
            url: `${domain}/api/quanlyPhim/laydanhsachphim?manhom=${groupID}`,
            method: 'GET'
        })
    }

    layDanhSachPhim2 = () => {
        return axios({
            url: `${domain}/api/quanlyPhim/laydanhsachphim?manhom=${groupID2}`,
            method: 'GET'
        })
    }

    // Lấy thông tin chi tiết phim thông qua mã phim
    layChiTietPhim = (maPhim) => {
        return axios({
            url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
    }

    // Lấy chi tiết phòng vé
    layChiTietPhongVe = (maLichChieu) => {
        return axios({
            url: `${domain}/api/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`,
            method: 'GET'
        })
    }
}

export const qlPhimService = new QuanLyPhimServices();