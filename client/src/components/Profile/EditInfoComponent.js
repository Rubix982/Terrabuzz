import React from 'react';

// React components
import Modal from './Modal';

// Styling
import EditInfoComponentStyling from '../../style/Profile/EditInfoComponent.module.css'
import EditLogo from '../../assets/profile/edit.svg';

const EditInformation = (props, children) => {

    let funcState = {
        modal: false,
        name: "",
        modalInputName: ""
    };

    function handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        funcState = {
            [name]: value
        };
    }

    function handleSubmit(e) {
        // this.setState({ name: this.state.modalInputName });
        console.log("Here", e);
        modalClose();
    }

    function modalOpen() {
        funcState = {
            modal: true,
            name: funcState.name,
            modalInputName: funcState.modalInputName
        };
    }

    function modalClose() {
        funcState = {
            modal: false,
            name: funcState.name,
            modalInputName: ""
        };
    }

    return (
        <div className={EditInfoComponentStyling.EditOption}>
            <img src={EditLogo} alt="" />
            <a href="#" className={EditInfoComponentStyling.EditOption} onClick={e => modalOpen(e)}>
                Edit?
          </a>
            <Modal show={funcState.modal} handleClose={e => modalClose(e)}>
                <h2>Hello Modal</h2>
                <div className="form-group">
                    <label>Enter Name:</label>
                    <input
                        type="text"
                        value={funcState.modalInputName}
                        name="modalInputName"
                        onChange={e => handleChange(e)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button onClick={e => handleSubmit(e)} type="button">
                        Save
              </button>
                </div>
            </Modal>
        </div>
    )
};

export default EditInformation;