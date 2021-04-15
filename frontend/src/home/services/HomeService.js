import { API_URL } from "../../config";
import axios from "axios";

class HomeService {
    getHomeSliderInfo = async () => {
        const url = `${API_URL}home/getHomeSliderInfo`;

        const result = await axios
            .get(url)
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

export default new HomeService();