import { addMessage } from './messageReducer'

/**
 * Mapeia o state para props para ser utilizado em componentes React.
 *  
 * @param {*} state O state redux que será transfomado em props.
 * @returns Objeto com o state tranformado em props.
 */
export const mapStateToProps = (state) => {
  return { messages: state }
};

/**
 * Mapeia uma função dispatch a qual se tornará prop para ser
 * utilizada em componentes React.
 * 
 * @param {*} dispatch uma função que faz o dispatch. 
 * @returns Função com parametro message a qual será 
 *          despachada pela função dispatch} 
 */
export const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};