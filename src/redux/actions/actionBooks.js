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
    addedBooks: (item) => {
        return {
            type: "ADDEDBOOKS_ITEM",
            payload: item,
        };
    },
    setLoaded: (bool) => ({
        type: "SETLOADED",
        payload: bool,
    }),
    setLoadedMore: (bool) => ({
        type: "SETLOADED_MORE",
        payload: bool,
    }),
    setChooseBook: (item) => ({
        type: "SETCHOOSE_BOOK",
        payload: item,
    }),
};

export const getBooks = (text, categories, sorting) => async (dispatch) => {
    try {
        dispatch(actions.setLoaded(true));
        const data = await axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${text}${
                    categories === "all" ? "" : `+subject: ${categories}`
                }&orderBy=${sorting}&startIndex=0&maxResults=30&key=AIzaSyBMrcf7kAfixlZLo9eh2CH_hcjHpodt6_k`
            )
            .then((resolve) => resolve.data);
        dispatch(actions.setLoaded(false));
        dispatch(actions.setBooks(data.items, data.totalItems));
    } catch (error) {
        dispatch(actions.setLoaded(false));
        dispatch(actions.setBooks([], 0));
    }
};

export const addedBooks =
    (text, categories, sorting, startIndex) => async (dispatch) => {
        try {
            dispatch(actions.setLoadedMore(true));
            const data = await axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes?q=${text}${
                        categories === "all" ? "" : `+subject: ${categories}`
                    }&orderBy=${sorting}&startIndex=${startIndex}&maxResults=30&key=AIzaSyBMrcf7kAfixlZLo9eh2CH_hcjHpodt6_k`
                )
                .then((resolve) => resolve.data);
            dispatch(actions.setLoadedMore(false));
            dispatch(actions.addedBooks(data.items));
        } catch (error) {
            dispatch(actions.setLoadedMore(false));
            console.log(error);
        }
    };

export default actions;
