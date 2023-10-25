import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventStore } from "../../stores/EventsStore";
import { PageStructure } from "../PageStructure";

export const EventsList = () => {
  const [events, setEvents] = useState(eventStore.getAllEvents());

  useEffect(() => {
    eventStore.addChangeListener(updateEvents);
    return () => {
      eventStore.removeChangeListener(updateEvents);
    };
  }, []);

  const updateEvents = () => {
    setEvents(eventStore.getAllEvents());
  };

  const handleFavoriteClick = (eventId, isFavorite) => {
    if (isFavorite) {
      eventStore.unmarkFavoriteEvent(eventId);
    } else {
      eventStore.markFavoriteEvent(eventId);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Events List</h1>
      <PageStructure>
        <ul>
          {
            events.map((event) => (
              <li key={event.id}>
                <Link to={`/event/${event.id}`}>{event.name}</Link>
                <button onClick={() => handleFavoriteClick(event.id, event.isFavorite)}>
                  {event.isFavorite ? "Remove from favorites" : "Add to favorites"}
                </button>
              </li>
            ))
          }
        </ul>
      </PageStructure>
    </>
  );
};
