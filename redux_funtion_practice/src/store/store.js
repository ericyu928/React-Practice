import { createStore } from 'redux';

import product from '../product.json'

const item = {
    cartItem: [],
    productList: product
}

const storeReducer = (state = item, action) => {
    if (action.type === "addCart") {
        let x = 0;
        let isExist = false;
        for (let i = 0; i < state.cartItem.length; i++) {
            if (state.cartItem[i].title === action.value.title) {
                isExist = true;
                x=i;
                break;
            }
        }
        if (isExist) {
            const newCartItem = [...state.cartItem];
            newCartItem[x].quantity += 1;
            return {
                cartItem: newCartItem,
                productList: product

            }
        }
        else {
            const newCartItem = {
                title: action.value.title,
                quantity: 1,
                price: action.value.price,
            }
            return {
                cartItem: [...state.cartItem, newCartItem],
                productList: product
            }
        }

    }
    else if (action.type === "descamount") {
        for (let i = 0; i < state.cartItem.length; i++) {
            if (state.cartItem[i].title === action.title) {
                const newCartItem = [...state.cartItem];
                if (state.cartItem[i].quantity === 1) {
                    newCartItem.splice(i, 1);
                }
                else {
                    newCartItem[i].quantity -= 1;
                }
                return {
                    cartItem: newCartItem,
                    productList: product

                }
            }
        }
    }
    else if (action.type === "addamount") {
        for (let i = 0; i < state.cartItem.length; i++) {
            if (state.cartItem[i].title === action.title) {
                const newCartItem = [...state.cartItem];
                newCartItem[i].quantity += 1;
                return {
                    cartItem: newCartItem,
                    productList: product
                }
            }
        }
    }
    return state
}

const store = createStore(storeReducer);

export default store;