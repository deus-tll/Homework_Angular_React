import eventStore from "../../stores/EventsStore";
import * as actions from "../../actions/eventActions";
import { PageStructure } from "../service-components/PageStructure";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilterByType } from "../app-components/FilterByType";
import { getUniqueTypes } from "../functions";

export const FavoriteEventsList = () => {
  const [favoriteEvents, setFavoriteEvents] = useState(
    eventStore.getFavorites()
  );
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    eventStore.addChangeListener(updateEvents);
    console.log(favoriteEvents);
    return () => {
      eventStore.removeChangeListener(updateEvents);
    };
  }, [favoriteEvents]);

  const updateEvents = () => {
    const updatedFavoriteEvents = eventStore.getFavorites();
    setFavoriteEvents([...updatedFavoriteEvents]);
  };

  const handleRemoveFromFavorites = (id) => {
    actions.unmarkFavoriteEvent(id);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <h1 className="text-center mt-5">Favorite Events List</h1>
      <PageStructure>
        <FilterByType
          types={getUniqueTypes(favoriteEvents)}
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
        />
        <ul className="list-group">
          {favoriteEvents
          .filter((event) => selectedType === "" || event.type === selectedType)
          .map((event) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={event.id}
            >
              <Link className="link-dark" to={`/event/${event.id}`}>
                {event.name}
              </Link>
              <button
                className="btn btn-dark"
                onClick={() => handleRemoveFromFavorites(event.id)}
              >
                Remove from favorites
              </button>
            </li>
          ))}
        </ul>
      </PageStructure>
    </>
  );
};