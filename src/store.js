import { configureStore, createSlice } from "@reduxjs/toolkit";

// 전역변수 만들기 useState()역할 
let user = createSlice({
   name : 'user', 
   initialState : {name: '강바람', age: 20},
   reducers: {
        changeName(state) {
            state.name = '민들레'
        },
        increase(state, action) {
            state.age += action.payload
        }
   }
})

let cart = createSlice({
    name : 'cart', 
    initialState : [
        {id:0, name: 'White and Black', count :2},
        {id:2, name: 'Gray Yordan', count :1}
    ],
    reducers: {
        addCount(state, action) {
            state[action.payload].count++
        }
    }
 })

export let { changeName, increase } = user.actions
export let { addCount } = cart.actions

export default configureStore({
    reducer : {
      user  : user.reducer,
      cart : cart.reducer 
    }
})