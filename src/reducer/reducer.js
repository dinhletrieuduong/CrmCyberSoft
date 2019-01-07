var redux = require('redux');

const CrmState = {
    sttSideBar: true,
    title: ["Danh Sách Khóa Học", "Tạo Khóa Học", "Chỉnh Sửa"],
    showTitle: 0,
    ChinhSuaSTT: 0,
    khoaHoc: {}
}
const reducer = (state = CrmState, action) => {
    switch (action.type) {
        case "CHANGE_STT_SIDEBAR":
            return {...state, sttSideBar: !state.sttSideBar};
        case "CHANGE_TITLE_0":
            return {...state, showTitle: 0};
        case "CHANGE_TITLE_1":
            return {...state, showTitle: 1};
        case "CHANGE_TITLE_2":
            return {...state, showTitle: 2, khoaHoc: {...action.obj}};
        default:
            return state;
    }
}

var store = redux.createStore(reducer);
store.subscribe(() => {console.log(store.getState())});

export default store;