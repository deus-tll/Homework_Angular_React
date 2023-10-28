import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as actions from "../../actions/eventActions";

export const AddEventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventType, setEventType] = useState("");

  const handleAddEvent = () => {
    const newEvent = {
      id: uuidv4(),
      name: eventName,
      location: eventLocation,
      type: eventType,
      isFavorite: false,
    };

    actions.addEvent(newEvent);

    setEventName("");
    setEventLocation("");
    setEventType("");
  };

  return (
    <div className="mb-5">
      <h2 className="text-center">Add New Event</h2>
      <form>
        <div>
          <label className="form-label input-group d-block">
            Event Name:
            <input
              className="form-control w-100"
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="form-label input-group d-block">
            Event Location:
            <input
              className="form-control w-100"
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="form-label input-group d-block">
            Event Type:
            <input
              className="form-control w-100"
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            />
          </label>
        </div>
        <button className="btn btn-dark" type="button" onClick={handleAddEvent}>
          Add Event
        </button>
      </form>
    </div>
  );
};
