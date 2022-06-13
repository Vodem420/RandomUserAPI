import axios from "axios";
export default {
    getRandomUser(){
        return axios.get('https://randomuser.me/api/?gender=female')
            .then(response => {
                return response.data.results[0]
            })
            .catch(e => {
                console.log(e);
        })
    }
}