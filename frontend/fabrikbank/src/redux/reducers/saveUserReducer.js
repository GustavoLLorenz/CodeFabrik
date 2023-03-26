const INITIAL_STATE = { 
  user: {},
  logado: false
};

const types = {
  SAVE_USER: "SAVE_USER",
  LOGOUT: "LOGOUT"
}

export const saveUserReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case types.SAVE_USER:
      console.log('entrei aqui de novo')
       return {
      
        user: action.payload,
        logado: true
       }
    case types.LOGOUT:
      return state = INITIAL_STATE

      default:
        return state;
  }

};