// recomenda-se o RTK. createStore() foi substituído por configureStore()
import { legacy_createStore as createStore } from 'redux'

const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            return { ...Object.assign({}, state), status: "online" }
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = createStore(immutableReducer);

console.log("Antes: status =", store.getState().status)
console.log("Antes:", store.getState())

store.dispatch(wakeUp())

console.log("Depois: status =", store.getState().status)
console.log("Depois:", store.getState())