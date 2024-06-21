import React from "react";
import NavBar from "../components/navBar/navBar";
import ProductListing from "../components/products/productListing";
import useAxios from "../components/customHooks/useAxios";

function HomeScreen() {
  const [data, error, loading] = useAxios("https://dummyjson.com/recipes");
  const [todoData] = useAxios("https://jsonplaceholder.typicode.com/todos");
  console.log(todoData, "todoData");

  if (loading) {
    return (
      <>
        <NavBar />
        <h2>Loading....</h2>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        {error ? (
          <h3>{error}</h3>
        ) : (
          <>
            {data?.recipes?.map((eachRecipe) => {
              return (
                <>
                  <h4>{eachRecipe.name}</h4>
                </>
              );
            })}
          </>
        )}

        {/* <ProductListing /> */}
      </>
    );
  }
}

export default HomeScreen;
