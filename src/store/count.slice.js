import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    // 3 thuộc tính bắt buộc phải truyền vào

    // name: duy nhất để redux phân biệt được các reducer khác nhau
    name: "countSlice",

    /**
     * Giá trị khởi tạo ban đầu của store
     * - giống như khởi tạo của useState
     */
    initialState: {
        countValue: 10
    },


    /**
     * Các hành động mà các bạn cần xử lý với store này
     * 
     * - tăng biết count
     * - giảm biến count
     * - reset lại biến count
     * - tăng biến count lên 2 giá trị
     * 
     * Tương ứng với mỗi hành động thì chúng ta sẽ tạo mỗi method khác nhau trong thuộc tính reducers
     */
    reducers: {
        inc() { },
        desc() { },
        reset() { }
    }
})

// Lấy reducer từ countSlice
export const countReducer = countSlice.reducer;