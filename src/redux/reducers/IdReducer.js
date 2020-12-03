const ma = {
    maLichChieu: '',
}

export default (state = ma, action) => {
    switch (action.type) {
        case 'GUI_MA':
            console.log(action.payload);
            state.maLichChieu = action.payload;
            return state;
        default:
            return state
    }

}