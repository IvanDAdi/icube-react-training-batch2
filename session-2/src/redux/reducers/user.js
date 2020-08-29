const initalState = {
  user: []
};

const userReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USER':
      return state.user;

    case "REGISTER":
      return {
        ...state,
        user: [
          ...state.user,
          payload,
      ]
      };
    default:
      return state;
  }
};

export default userReducer;