import axios from "axios";

const instance =axios.create({
    baseURL: 'https://us-central1-fir-aa28e.cloudfunctions.net/api' //the api (cloude function ) URL
});
export default instance;