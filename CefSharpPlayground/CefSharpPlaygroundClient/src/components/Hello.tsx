import * as React from "react";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export interface IHelloState {
  time: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<IHelloProps, IHelloState> {

  public constructor(props: IHelloProps) {
    super(props);
    this.state = {
      time: new Date().toUTCString()
    }
  }

  public componentDidMount() {
    setInterval(() => this.tick(), 50);
  }

  public tick() {
    this.setState({time: new Date().toUTCString()});
  }

  public clickHandler(e) {
    App.displayMessage("Hello from React!!");
  }

  public render() {
    return <h1 onClick={this.clickHandler}>Hello from {this.props.compiler} and {this.props.framework}! The time is {this.state.time}.</h1>;
  }
}
