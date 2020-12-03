import { combineReducers } from 'redux'
import QuanLyNguoiDungReducer from './QuanLyNguoiDungReducer';
import IdReducer from './IdReducer'

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer,
    IdReducer,
});

export default rootReducer;