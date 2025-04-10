import { configureStore } from '@reduxjs/toolkit';

// B1: Khởi tạo store
// - Chỉ cần khởi tạo một lần duy nhất
export const store = configureStore({
    reducer: {
        countReducer: (state = { count: 1 }) => {
            return state
        }
    }
})

// 1. Làm sao để lấy dữ liệu về: useSelector -> react-redux
// 2. Làm sao để cập lại dữ liệu: useDispatch -> react-redux