const ma = {
    maLichChieu: '',
}

export default (state = ma, action) => {
    switch (action.type) {
        case 'GUI_MA':
            state.maLichChieu = action.payload;
            return state;
        case 'RESET':
            state.maLichChieu = '';
            //console.log('malichieu', state.maLichChieu);
            return state;
        default:
            return state
    }

}