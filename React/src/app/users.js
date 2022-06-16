import { createSlice } from "@reduxjs/toolkit"
import { Users } from "../data/User"
// const initialState = {
//     users: Users,
//     isLogin: false,
//     me: {
//         uid: 1,
//         name: "seo",
//         id: "seo",
//         img: "/img/profile/2.jpeg",
//         password: "123123123",
//     },
// }
// const CHECK_ID = "CHECK_ID"
// const LOGIN = "LOGIN"
// const GETUSERS = "GETUSERS";

// const SELECT_USER_BY_ID = "SELECT_USER_BY_ID";
// const INSERT_USER = "INSERT_USER";
// const UPDATE_USER = "UPDATE_USER";
// const DELETE_USER = "DELETE_USER";
// const LOGIN = "LOGIN";
// export const login = createAsyncThunk(LOGIN, async (user, thunkAPI) => {
//     const { users } = thunkAPI.getState().users
//     const isLogin = await loginApi(users, user)
//     return isLogin
// })

// const userSlice = createSlice({
//     name: "users",
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             state.isLogin = true
//         },
//         // getUsers: (state, action) => {
//         //   state.value = action.payload;
//         // },
//         // selectUserById: (state, action) => {
//         //   state.value = action.payload;
//         // },
//     },
//     extraReducers: {},
// })
// export const { login, getUsers, selectUserById } = userSlice.actions
// export default userSlice.reducer

export const initialState = {
    user: null,
    loginLoading: false,
    loginSuccced: false,
    loginError: null,
}

// export default function* rootSaga() {
//   yield all([
//     fork(watchLogin)
//     //다른 작업이 있을 경우, 추가할 수 있음
//   ])
// }
export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"

export const loginRequestAction = () => {
    console.log("reducer / loginRequestAction ")
    // return {
    //     // type: LOG_IN_REQUEST,
    // }
}
export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        login_reducers: (state, { payload }) => {
            console.log("reduce_payload", payload) //함수 실행 시 줄 값
        },
    },
})
export const { login_reducers } = usersSlice.actions
export default usersSlice.reducer
