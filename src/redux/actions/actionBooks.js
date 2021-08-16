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
};

export const getBooks = (text) => async (dispatch) => {
    const data = await axios
        .get(
            `https://www.googleapis.com/books/v1/volumes?q=${text}&maxResults=30&key=AIzaSyBMrcf7kAfixlZLo9eh2CH_hcjHpodt6_k`
        )
        .then((resolve) => resolve.data);

    dispatch(actions.setBooks(data.items, data.totalItems));
};

export default actions;
