import React from "react";

// BEGIN (write your solution here)
const Body = props => <p className="modal-body">{props.children}</p>;
const Footer = props => (
  <button type="button" class="modal-close-button btn btn-default">
    {props.children}
  </button>
);
const Header = props => (
  <div class="modal-header">
    <div class="modal-title">{props.children}</div>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
);

export default class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;
  renderClosed() {
    const divStyleNone = {
      display: "none"
    };
    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger">
          Open
        </button>
        <div className="modal fade show" style={divStyleNone}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
  renderOpen() {
    const divStyleBlock = {
      display: "block"
    };
    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger">
          Open
        </button>
        <div className="modal" style={divStyleBlock}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return this.props.isOpen ? this.renderOpen() : this.renderClosed();
  }
}
// END
