const ADD = 'ADD';

export function messageReducer(state = [], action){
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

export function addMessage(message){
  return {
    type: ADD,
    message
  }
};