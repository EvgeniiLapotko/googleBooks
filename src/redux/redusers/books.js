let initialState = {
    item: [],
    total: 0,
    loader: false,
    startIndex: 31,
    loaderMore: false,
    chooseBook: [],
};

const bookshReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETBOOKS_ITEM":
            return {
                ...state,
                item: action.payload.item,
                total: action.payload.results,
                startIndex: 31,
            };
        case "ADDEDBOOKS_ITEM":
            return {
                ...state,
                item: [...state.item, ...action.payload],
                startIndex: state.startIndex + 30,
            };
        case "SETLOADED":
            return {
                ...state,
                loader: action.payload,
            };
        case "SETLOADED_MORE":
            return {
                ...state,
                loaderMore: action.payload,
            };

        case "SETCHOOSE_BOOK":
            return {
                ...state,
                chooseBook: action.payload,
            };

        default:
            return state;
    }
};

export default bookshReducer;
