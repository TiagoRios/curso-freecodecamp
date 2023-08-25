// recomenda-se o RTK. createStore() foi substituído por configureStore()
import { legacy_createStore as createStore } from 'redux'

const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
];

const immutableReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            // Não mude o estado aqui ou os testes vão falhar
            // usei desestruturação 
            return [...state, action.todo]
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo
    }
}

const store = createStore(immutableReducer);

store.dispatch(addToDo("banhar o cão"))

console.log(store.getState());