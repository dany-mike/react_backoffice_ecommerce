export const initialState = {
  isAuthenticated: false,
  user: null,
};

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      console.log(state);
      console.log(action);
      return { ...state, isAuthenticated: true };
    }
    case "LOAD_USER": {
      console.log(action);
      console.log(state);
      return { ...state, user: action.user };
    }
    case "LOGOUT": {
      return { isAuthenticated: false, user: null };
    }
    default:
      return state;
  }
}
