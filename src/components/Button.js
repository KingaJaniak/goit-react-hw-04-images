import { Component } from 'react';
import { Button } from './App.styled';

class Btn extends Component {
  render() {
    return <Button onClick={this.props.onClick}>{this.props.children}</Button>;
  }
}
export default Btn;
