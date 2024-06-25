import React, { useContext } from "react";
import NavBar from "../components/navBar/navBar";
import { UserInfo } from "../navigation/navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import { borrowBookAction, returnBookAction } from "../redux/books/action";
import { userNameAction } from "../redux/profile/action";

function SettingScreen() {
  const { increaseCount, count } = useContext(UserInfo);
  const reduxData = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const borrowBook = () => {
    dispatch(borrowBookAction(5));
  };

  const returnBook = () => {
    dispatch(returnBookAction(5));
  };

  const changeName = () => {
    dispatch(userNameAction("kiran"));
  };
  console.log(reduxData, "reduxDatareduxData");
  return (
    <div>
      <NavBar />

      <h2>Books count </h2>

      <button onClick={borrowBook}>Borrow books from library</button>
      <button onClick={returnBook}>Return books from library</button>

      <h3>Book details</h3>
      {reduxData.books.bookDetails.map((eachBook) => {
        return (
          <>
            <h3>{eachBook.name}</h3>
            <h3>{eachBook.quantity}</h3>
          </>
        );
      })}

      <h3>Profile data</h3>
      <h5>{reduxData.profile.username}</h5>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default SettingScreen;
