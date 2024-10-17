const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                action.payload
            ];

        case "DELITEM":
            return state.filter((x) => x.id !== action.payload.id);

        default:
            return state;
    }
}

export default addItems;
