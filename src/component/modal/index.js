import React from 'react';
import './modal.scss';

class Modal extends React.Component {

  render() {
    let winner = this.props.cpu && this.props.winner !== 'X' ? 'CPU' : this.props.winner;
    return (
      <div className="invis">
        <section className="modal">
          <h3 className="winner">{winner}</h3>
          <h2>{this.props.saying}</h2>
          <button className="btn" onClick={this.props.reset}> Play Again? </button>
        </section>
      </div>
    );
  }
}

export default Modal;
