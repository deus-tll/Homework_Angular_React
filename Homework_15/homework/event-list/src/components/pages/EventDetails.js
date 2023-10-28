import { useEffect, useState } from "react";
import * as actions from "../../actions/eventActions";
import { useParams } from "react-router-dom";
import eventStore from "../../stores/EventsStore";
import { Line } from "../app-components/Line";
import { PageStructure } from "../service-components/PageStructure";
import { AddToFavoritesButton } from "../app-components/AddToFavoritesButton";
import { EditEventForm } from "../app-components/EditEventForm";

export const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadEvent = () => {
      const fetchedEvent = eventStore.getEventById(id);
      setEvent(fetchedEvent);
    };

    eventStore.addChangeListener(loadEvent);
    loadEvent();

    return () => {
      eventStore.removeChangeListener(loadEvent);
    };
  }, [id, event]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (editedEvent) => {
    actions.updateEvent(editedEvent);
    setIsEditing(false);
  };

  return (
    <>
      {event && (
        <PageStructure>
          {isEditing ? (
            <EditEventForm
              event={event}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              <h1 className="mb-5 text-center">Info About Event</h1>
              <Line name={"Name:"} value={event.name} />
              <Line name={"Location:"} value={event.location} />
              <Line name={"Type:"} value={event.type} />
              <div className="d-flex justify-content-around mt-3">
                <AddToFavoritesButton
                  eventId={event.id}
                  isFavorite={event.isFavorite}
                />
                <button className="btn btn-secondary w-25" onClick={handleEdit}>
                  Edit Event
                </button>
              </div>
            </>
          )}
        </PageStructure>
      )}
    </>
  );
};
