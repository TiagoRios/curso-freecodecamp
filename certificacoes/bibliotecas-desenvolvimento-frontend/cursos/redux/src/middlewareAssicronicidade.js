// recomenda-se o RTK. createStore() foi substituído por configureStore()
import Redux, { legacy_createStore as createStore } from 'redux'
import ReduxThunk from 'redux-thunk';

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => {
    return {
        type: REQUESTING_DATA
    }
}
const receivedData = (data) => {
    return {
        type: RECEIVED_DATA, users: data.users
    }
}

// Para criar uma função assíncrona retorne uma função no criador de ação
// a função recebe dispatch como argumento.
const handleAsync = () => {
    return function (dispatch) {
        // dentro dessa função pode despachar ações e fazer requisições assíncronas.

        dispatch(requestingData);

        setTimeout(function () {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            }

            dispatch(receivedData(data))

        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: ["algo","outro"]
};

const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
        default:
            return state;
    }
};

const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);

handleAsync()(store.dispatch);

console.log("dados iniciais:", store.getState());

setTimeout(() => {
    console.log("Após 2 segundos:", store.getState());
}, 2000);
setTimeout(() => {
    console.log("Após 3 segundos:", store.getState());
}, 3000);