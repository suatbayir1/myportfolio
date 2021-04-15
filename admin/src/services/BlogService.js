import { API_URL } from "../config";
import axios from "axios";

class BlogService {
    getCategories = async () => {
        const url = `${API_URL}category/getCategories`;

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

    getAllAuthors = async () => {
        const url = `${API_URL}author/getAll`;

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

    addPost = async (payload) => {
        const url = `${API_URL}post/add`;

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

export default new BlogService();