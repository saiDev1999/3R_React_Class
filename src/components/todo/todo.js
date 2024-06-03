import { Component } from "react";

class Todos extends Component {
  state = {
    todos: ["eat apple", "eat banana"],
    newFruit: "eat pineapple",
    newFruit2: "eat pineapple",
  };

  addNewFruit = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newFruit],
    });
  };

  deleteFruit = (index) => {
    const newList = this.state.todos.filter((each, i) => {
      return index !== i;
    });

    // const newList = this.state.todos;
    // newList.splice(index, 1);
    // console.log(newList, "newList");

    this.setState({
      todos: newList,
    });
  };

  updateFruit = (index) => {
    console.log("index: ", index);

    const random = "eat watermelon";

    // Updarte the selectef fruit in the existing
    // hint : we can use map method
    console.log(this.state.todos);
    const updatedTodos = this.state.todos.map((eachFruit, i) => {
      if (index === i) {
        return random;
      } else {
        return eachFruit;
      }
    });

    this.setState({
      todos: updatedTodos,
    });

    console.log(updatedTodos);
  };

  render() {
    return (
      <>
        <button onClick={this.addNewFruit}>Click to add new Fruit</button>
        <ol>
          {this.state.todos.map((eachTodo, index) => {
            return (
              <>
                <li>{eachTodo}</li>
                <button onClick={() => this.deleteFruit(index)}>Delete</button>
                <button onClick={() => this.updateFruit(index)}>Update</button>
              </>
            );
          })}
        </ol>
      </>
    );
  }
}

export default Todos;
