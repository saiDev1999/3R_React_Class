import { Component } from "react";
import GreetingComponent from "../greeting/greeting";
import Todos from "../todo/todo";

class YoutubeButton extends Component {
  state = {
    subscribeText: "Please subscribe",
    subscribedText: "Thanks for subscribing ",
    isSubscribe: false,
  };

  changeText = () => {
    console.log("hello");
    //I need change the isSubscribe flag to true
    this.setState({
      isSubscribe: !this.state.isSubscribe,
    });

    console.log(this.state.isSubscribe, "Outside setState");
  };

  render() {
    return (
      <>
        <button onClick={this.changeText}>
          {this.state.isSubscribe
            ? this.state.subscribedText
            : this.state.subscribeText}
        </button>

        {this.state.isSubscribe && (
          <>
            <GreetingComponent>Wellcome sai</GreetingComponent>
            <Todos />
          </>
        )}
      </>
    );
  }
}

export default YoutubeButton;

// this -> it is used to access any state , method props
