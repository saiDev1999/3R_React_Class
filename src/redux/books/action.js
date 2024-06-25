export const borrowBookAction = (qty) => {
  const borrowBook = {
    type: "BORROW_BOOK",
    payload: qty,
  };
  return borrowBook;
};

export const returnBookAction = (qty) => {
  const returnBook = {
    type: "RETURN_BOOK",
    payload: qty,
  };
  return returnBook;
};
