import axios from 'axios';

const generateUsers = function () {
        return axios.get("https://randomuser.me/api/?results=80&nat=us")
    }

export default generateUsers;