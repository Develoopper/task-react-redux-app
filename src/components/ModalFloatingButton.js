import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import AddTask from "./AddTask"

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large orange darken-1 btn modal-trigger" data-target="modal1">
            <i className="material-icons">add</i>
          </a>
        </div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {
            /* If you want Bottom Sheet Modal then add 
            bottom-sheet class to the "modal" div
            If you want Fixed Footer Modal then add
            modal-fixed-footer to the "modal" div */
          }
          <div className="modal-content" style={{textAlign: "left"}}>
          <h4>New task</h4>
            <AddTask/>
          </div>
          <div className="modal-footer">
            <a className="modal-close btn-flat">
              Cancel
              <i className="material-icons right">close</i>
            </a>
            <button
              className="btn grey darken-3 m3 modal-close"
              type="submit"
              name="action"
              onClick={() => this.props.handleAdd({title: "Task8", body: "Body8"})}
            >
              Add
              <i className="material-icons right">add</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;