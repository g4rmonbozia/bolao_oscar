import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTJiZmZkMmY3YmJkZjc0Y2U2YTNhODA5NjYyMzM5NiIsInN1YiI6IjYxZTU5YWU5ZjVjODI0MDA2OGIxZDFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RuyONjee4b3aJZSkU_kvqKLS1kKBgs6f8bBKbRdHFr8'
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url + "?language=en-US", {
            headers,
        });
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
};
