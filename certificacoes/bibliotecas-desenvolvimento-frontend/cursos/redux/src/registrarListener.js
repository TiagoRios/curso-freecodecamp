// recomenda-se o RTK. createStore() foi substituído por configureStore()
import Redux, { legacy_createStore as createStore} from 'redux'

const ADD = 'ADD';

// redutor sempre recebe 2 argumentos, 
const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

// const store = Redux.createStore(reducer); depreciado
const store = createStore(reducer);

let count = 0;

// listener(ouvinte) para cada ação dispatcher
store.subscribe(() => count += 1)

// dispacha eventos de ação
store.dispatch({ type: ADD });
console.log("count:", count);
console.log("state:", store.getState());
store.dispatch({ type: ADD });
console.log("count:", count);
console.log("state:", store.getState());
store.dispatch({ type: ADD });
console.log("count:", count);
console.log("state:", store.getState());