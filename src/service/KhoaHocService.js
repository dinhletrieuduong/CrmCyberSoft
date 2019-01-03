import axios from 'axios';

export class KhoaHocService {

    getInfo() {
        return axios.get('showcase/resources/demo/data/cars-small.json')
            .then(res => res.data.data);
    }
}