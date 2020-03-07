import React from "react";

// BEGIN (write your solution here)
const Body = props => <p className="modal-body">{props.children}</p>;
const Footer = props => <p class="modal-footer">{props.children}</p>;
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
      <div className="modal" style={divStyleNone}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
  renderOpen() {
    const divStyleBlock = {
      display: "block"
    };
    return (
      <div className="modal fade show" style={divStyleBlock}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
  render() {
    return this.props.isOpen ? this.renderOpen() : this.renderClosed();
  }
}
// END
