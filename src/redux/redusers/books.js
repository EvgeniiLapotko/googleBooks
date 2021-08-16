let initialState = {
    item: [],
    total: 0,
    setLoaded: false,
};

const bookshReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETBOOKS_ITEM":
            return {
                ...state,
                item: action.payload.item,
                total: action.payload.results,
            };

        default:
            return state;
    }
};

export default bookshReducer;
