var redux = require('redux');

const CrmState = {
    logined: true,
}
const reducer = (state = CrmState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, logined: true};
        case "LOGOUT":
            return {...state, logined: false};
        default:
            return state;
    }
}

var store = redux.createStore(reducer);
store.subscribe(() => {console.log(store.getState())});

export default store;