const borrowBookAction = () => {
  const borrowBook = {
    type: "BORROW_BOOK",
    payload: 1,
  };
  return borrowBook;
};

const returnBookAction = () => {
  const returnBook = {
    type: "RETURN_BOOK",
    payload: 1,
  };
  return returnBook;
};
