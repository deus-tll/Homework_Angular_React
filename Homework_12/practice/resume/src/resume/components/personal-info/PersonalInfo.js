import React, { Component } from "react";
import { EditInfo } from "./EditInfo";
import { DisplayInfo } from "./DisplayInfo";

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      editedInfo: { ...this.props }
    };
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  handleCancelClick = () => {
    this.setState({
      isEditing: false,
      editedInfo: { ...this.props }
    });
  };

  handleSaveClick = () => {
    this.setState({ isEditing: false });
  };

  handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      editedInfo: { ...prevState.editedInfo, [field]: value },
    }));
  };

  render() {
    const { isEditing, editedInfo } = this.state;

    return (
      <div class="col-lg-12 d-block block">
        <h2 class="text-center">Персональна інформація</h2>

        {isEditing ? (
          <EditInfo
          editedInfo={editedInfo}
          handleInputChange={this.handleInputChange}
          handleSaveClick={this.handleSaveClick}
          handleCancelClick={this.handleCancelClick} />
        ) : (
          <DisplayInfo
          editedInfo={editedInfo}
          handleEditClick={this.handleEditClick} />
        )}
      </div>
    );
  }
}