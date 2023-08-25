// recomenda-se o RTK. createStore() foi substituído por configureStore()
import { legacy_createStore as createStore } from 'redux'

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return state.filter((x, index) => index !== action.index)
        default:
            return state;
    }
};

const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

const store = createStore(immutableReducer);

console.log("Antess:", store.getState());

store.dispatch(removeItem(3))

console.log("Depois:", store.getState());