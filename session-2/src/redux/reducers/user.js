const initalState = {
  register:[]
};
  
  const userReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "LOGIN":
        return {
          ...state,
          user: payload
        };
      case "REGISTER":
        return {
          ...state,
          register: [
            ...state.register,
            payload,
          ]
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  