let initialState = {
    textFeild: "",
    categories: "",
    sorting: "",
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH_DATA":
            return {
                ...state,
                textFeild: action.payload.textFeild,
                categories: action.payload.categories,
                sorting: action.payload.sorting,
            };
        default:
            return state;
    }
};

export default searchReducer;
