import { legacy_createStore as createStore} from 'redux'

const ADD = 'ADD';

function messageReducer(state = [], action){
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

export const store = createStore(messageReducer);

// ação para o store.dispatch(action)
export function addMessage(message){
  return {
    type: ADD,
    message
  }
};