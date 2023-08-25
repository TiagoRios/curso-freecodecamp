// recomenda-se o RTK. createStore() foi substituído por configureStore()
import { legacy_createStore as createStore } from 'redux'

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const incAction = () => {
    return {
        type: INCREMENT
    }
};

const decAction = () => {
    return {
        type: DECREMENT
    }
};

const store = createStore(counterReducer)

console.log("inicial: ", store.getState());
store.dispatch(incAction());
console.log("incr: ", store.getState());
store.dispatch(decAction());
console.log("decr: ", store.getState());
store.dispatch(decAction());
console.log("decr: ", store.getState());