import { API_URL } from "../config";
import axios from "axios";

class BlogService {
    getPosts = async (payload) => {
        const url = `${API_URL}post/get`;

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

    getCategories = async (payload) => {
        const url = `${API_URL}category/getCategories`;

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

    getPost = async (payload) => {
        const url = `${API_URL}post/getPost`;

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

    getAuthor = async (payload) => {
        const url = `${API_URL}author/get`;

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