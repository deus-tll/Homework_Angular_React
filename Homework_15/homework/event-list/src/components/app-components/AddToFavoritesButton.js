import { useEffect, useState } from "react";
import * as actions from "../../actions/eventActions";

export const AddToFavoritesButton = ({ eventId, isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    if (favorite) {
      actions.unmarkFavoriteEvent(eventId);
      setFavorite(false);
    } else {
      actions.markFavoriteEvent(eventId);
      setFavorite(true);
    }
  };

  useEffect(() => {
    setFavorite(isFavorite);
  }, [isFavorite]);

  return (
    <button className="btn btn-dark" onClick={handleFavoriteClick}>
      {favorite  ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
};