import React from "react";
import cn from "classnames";

// BEGIN (write your solution here)
const Body = ({ children }) => <p className="modal-body">{children}</p>;
const Footer = ({ children }) => <p className="modal-footer">{children}</p>;
const Header = ({ children, toggle }) => {
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={toggle}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};

export default class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const divStyle = {
      display: this.props.isOpen ? "block" : "none"
    };
    const { children } = this.props;
    const classes = cn({
      modal: true,
      fade: this.props.isOpen,
      show: this.props.isOpen
    });

    return (
      <div className={classes} style={divStyle}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}
// END
