import React from 'react';
import './input-area.scss';

class DisplayBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.boxLocation,
      value:  this.props.value || '',
    };
  }

  componentWillReceiveProps(nextPorps) {
    if (nextPorps) {
      this.setState({value: nextPorps.value});
    }
  }

  render() {
    return (
      <div className={this.props.boardSize === 3 ? 'box' : 'box4'}
        onClick={this.state.value === '' ? () => this.props.onPicking(this.state) : null} >
        <h1> {this.state.value} </h1>
      </div>
    );
  }
}


export default DisplayBox;
