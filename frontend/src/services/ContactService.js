import { API_URL } from "../config";
import axios from "axios";

class ContactService {
    sendMessage = async (payload) => {
        const url = `${API_URL}contact/sendMessage`;

        const result = await axios
            .post(url, payload)
            .then((response) => {
                if (response.status !== 200) return;
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        return result;
    }
}

export default new ContactService();