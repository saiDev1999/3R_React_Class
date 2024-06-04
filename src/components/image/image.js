import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.src} width={150} height={150} />;
  }
}
export default ImageComponent;
