const initialState = {
  totalBooks: 100,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BORROW_BOOK":
      return { ...state, totalBooks: state.totalBooks - action.payload };
    case "RETURN_BOOK":
      return { ...state, totalBooks: state.totalBooks + action.payload };
    default:
      return state;
  }
};
