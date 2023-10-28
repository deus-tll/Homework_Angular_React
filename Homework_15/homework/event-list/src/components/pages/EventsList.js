import React, { useEffect, useState } from "react";
import * as actions from "../../actions/eventActions";
import { Link } from "react-router-dom";
import eventStore from "../../stores/EventsStore";
import { PageStructure } from "../service-components/PageStructure";
import { AddToFavoritesButton } from "../app-components/AddToFavoritesButton";
import { FilterByType } from "../app-components/FilterByType";
import { getUniqueTypes } from "../functions";
import { AddEventForm } from "../app-components/AddEventForm";

export const EventsList = () => {
  const [events, setEvents] = useState(eventStore.getAllEvents());
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    eventStore.addChangeListener(updateEvents);
    return () => {
      eventStore.removeChangeListener(updateEvents);
    };
  }, []);

  const updateEvents = () => {
    const updatedEvents = eventStore.getAllEvents();
    setEvents([...updatedEvents]);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleRemoveEvent = (id) => {
    actions.removeEvent(id);
  };

  return (
    <>
      <h1 className="text-center mt-5">Events List</h1>
      <PageStructure>
        <AddEventForm />
        <FilterByType types={getUniqueTypes(events)} selectedType={selectedType} onTypeChange={handleTypeChange}/>
        <ul className="list-group">
          {events
            .filter(
              (event) => selectedType === "" || event.type === selectedType
            )
            .map((event) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={event.id}>
                <Link className="link-dark w-50" to={`/event/${event.id}`}>
                  {event.name}
                </Link>
                <div className=" d-flex justify-content-between w-50">
                  <AddToFavoritesButton eventId={event.id} isFavorite={event.isFavorite}/>
                  <button className="btn btn-dark" onClick={() => handleRemoveEvent(event.id)}>
                    Remove event from list
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </PageStructure>
    </>
  );
};
