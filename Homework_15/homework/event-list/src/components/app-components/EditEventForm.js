import React, { useState } from "react";

export const EditEventForm = ({ event, onSave, onCancel }) => {
  const [editedEvent, setEditedEvent] = useState(event);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  const handleSave = () => onSave(editedEvent);

  return (
    <>
      <h1 className="mb-5 text-center">Edit Event</h1>
      <form>
        <div className="mb-3">
          <label className="form-label input-group d-block">
            Name:
            <input
              type="text"
              className="form-control w-100"
              name="name"
              value={editedEvent.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label input-group d-block">
            Location:
            <input
              type="text"
              className="form-control w-100"
              name="location"
              value={editedEvent.location}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label input-group d-block">
            Type:
            <input
              type="text"
              className="form-control w-100"
              name="type"
              value={editedEvent.type}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary ms-2" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </>
  );
};
