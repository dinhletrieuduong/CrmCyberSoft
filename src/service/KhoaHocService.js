import axios from 'axios';

export class KhoaHocService {

    getInfo() {
        return axios.post('https://sv-crm-cybersoft.herokuapp.com/api/course/getCourse?page=1')
            .then((res) => {
                res.data.forEach(el => {
                    /*el.TenKhoaHoc = el.TenKhoaHoc.map((val) => {
                        return val.TenKhoaHoc + ", ";
                    });*/
                    el.TenKhoaHoc = el.TenKhoaHoc.toString();
                    el.DanhSachGiangVien = el.DanhSachGiangVien.toString()/*.map((val) => {
                        return val + ", ";
                    });
                    el.DanhSachGiangVien[el.DanhSachGiangVien.length - 1] = el.DanhSachGiangVien[el.DanhSachGiangVien.length - 1].slice(0, el.DanhSachGiangVien[el.DanhSachGiangVien.length - 1].length - 2);
*/
                    el.DanhSachMentor = el.DanhSachMentor.toString()/*.map((val, key) => {
                        return val + ", ";
                    });
                    el.DanhSachMentor[el.DanhSachMentor.length - 1] = el.DanhSachMentor[el.DanhSachMentor.length - 1].slice(0, el.DanhSachMentor[el.DanhSachMentor.length - 1].length - 2);
*/
                    el.NgayBatDau = el.NgayBatDau.slice(0, 10);

                    el.DanhSachHocVien = el.DanhSachHocVien.map((val)=> {
                        return val.MaHocVien.toString();
                    });
                    /*el.DanhSachHocVien[el.DanhSachHocVien.length - 1] = el.DanhSachHocVien[el.DanhSachHocVien.length - 1].slice(0, el.DanhSachHocVien[el.DanhSachHocVien.length - 1].length - 2);*/
                });
                return res.data;
            });
    }
}