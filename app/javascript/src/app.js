import React from "react";
import Text from "./text.coffee";

class App extends React.Component {
  render() {
    return <div>{new Text().stringName()}</div>;
  }
}

export default App;
