// recomenda-se o RTK. createStore() foi substituído por configureStore()
import Redux, { legacy_createStore as createStore} from 'redux'

// eles poderiam estar em arquivos separados.

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// reducer 1
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// reducer 2
const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
    auth: authReducer,
    count: counterReducer
})

const store = createStore(rootReducer);

console.log(store.getState());