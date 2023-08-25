// recomenda-se o RTK. createStore() foi substituído por configureStore()
import { legacy_createStore as createStore} from 'redux'

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch (action.type) {
    case ADD_NOTE: state = action.text
    default:
      return state;
  }
};

// retorna o type e outro dado
const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note
  }
};

const store = createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!')); // parametro é o 'note' em addNoteText
console.log(store.getState());
store.dispatch(addNoteText('Outro valor'));
console.log(store.getState());