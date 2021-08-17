const actions = {
    setSerach: (textFeild, categories, sorting) => ({
        type: "SET_SEARCH_DATA",
        payload: {
            textFeild,
            categories,
            sorting,
        },
    }),
};

export default actions;
