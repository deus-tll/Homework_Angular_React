import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export const addEvent = (event) => {
  dispatcher.dispatch({
    actionType: actionTypes.ADD_EVENT,
    addedEvent: event
  });
};

export const removeEvent = (id) => {
  dispatcher.dispatch({
    actionType: actionTypes.REMOVE_EVENT,
    eventId: id
  });
};

export const updateEvent = (event) => {
  dispatcher.dispatch({
    actionType: actionTypes.UPDATE_EVENT,
    updatedEvent: event
  });
};

export const markFavoriteEvent = (id) => {
  dispatcher.dispatch({
    actionType: actionTypes.MARK_FAVORITE_EVENT,
    markedEventId: id
  });
};

export const unmarkFavoriteEvent = (id) => {
  dispatcher.dispatch({
    actionType: actionTypes.UNMARK_FAVORITE_EVENT,
    unmarkedEventId: id
  });
};