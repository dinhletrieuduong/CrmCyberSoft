import axios from 'axios';
export class HocVienService {
    getList() {
        return axios.post('https://sv-crm-cybersoft.herokuapp.com/api/customer/getCustomer?page=1')
            .then((res) => {
                console.log(res.data);

                res.data.forEach(el => {
                    el.SinhNhat = el.SinhNhat.slice(0, 10);
                });
                return res.data;
            });
    }
    getInfo() {
        return axios.post('https://sv-crm-cybersoft.herokuapp.com/api/customer/getCustomer?page=1')
            .then((res) => {
                console.log(res.data);

                res.data.forEach(el => {
                    el.SinhNhat = el.SinhNhat.slice(0, 10);
                });
                return res.data;
            });
    }
}