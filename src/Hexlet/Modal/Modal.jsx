import cn from "classnames";
import React from "react";

// BEGIN (write your solution here)
export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <button type="button" class="modal-open-button btn btn-danger">
          Open
        </button>
        <div class="modal" style="display: none;">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title">Modal title</div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <p class="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
              <p class="modal-footer">
                <button
                  type="button"
                  class="modal-close-button btn btn-default"
                >
                  Cancel
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// END
