const DEFAULT_STATE = {
    orderSeatList: []
};

export const moviesReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "ORDER_SEAT":
            // console.log(payload)
            // const orderSeatListUpdate = [...state.orderSeatList, payload];
            // state.orderSeatList = orderSeatListUpdate;
            return { ...state };
        default:
            return state;
    }
}
