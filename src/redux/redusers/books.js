let initialState = {
    item: [],
    total: 0,
    loader: false,
};

const bookshReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETBOOKS_ITEM":
            return {
                ...state,
                item: action.payload.item,
                total: action.payload.results,
            };
        case "SETLOADED":
            return {
                ...state,
                loader: action.payload,
            };

        default:
            return state;
    }
};

export default bookshReducer;
