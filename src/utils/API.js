import axios from 'axios';

const generateUsers = () => {
    return axios.get("https://randomuser.me/api/?results=160&nat=us");
};

export default generateUsers;