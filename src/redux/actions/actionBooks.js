import axios from "axios";

const actions = {
    setBooks: (item, results) => {
        return {
            type: "SETBOOKS_ITEM",
            payload: {
                item,
                results,
            },
        };
    },
    setLoaded: (bool) => ({
        type: "SETLOADED",
        payload: bool,
    }),
};

export const getBooks = (text, categories, sorting) => async (dispatch) => {
    try {
        dispatch(actions.setLoaded(true));
        const data = await axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${text}${
                    categories === "all" ? "" : `+subject: ${categories}`
                }&orderBy=${sorting}&maxResults=30&startIndex=0&key=AIzaSyBMrcf7kAfixlZLo9eh2CH_hcjHpodt6_k`
            )
            .then((resolve) => resolve.data);
        dispatch(actions.setLoaded(false));
        dispatch(actions.setBooks(data.items, data.totalItems));
    } catch (error) {
        dispatch(actions.setLoaded(false));
        dispatch(actions.setBooks([], 0));
    }
};

export default actions;
