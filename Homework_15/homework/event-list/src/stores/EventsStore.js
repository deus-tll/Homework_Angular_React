import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { v4 as uuidv4 } from 'uuid';

class EventsStore extends EventEmitter {
  constructor() {
    super();
    this.events = [
      {
        id: uuidv4(),
        name: 'Event 1',
        location: 'Location 1',
        type: 'Cinema',
        isFavorite: false
      },
      {
        id: uuidv4(),
        name: 'Event 2',
        location: 'Location 1',
        type: 'Cinema',
        isFavorite: false
      },
      {
        id: uuidv4(),
        name: 'Event 3',
        location: 'Location 2',
        type: 'Concert',
        isFavorite: false
      },
      {
        id: uuidv4(),
        name: 'Event 4',
        location: 'Location 2',
        type: 'Concert',
        isFavorite: false
      },
    ];

    
  };

  static CHANGE_EVENT = "CHANGE_EVENT";

  addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this.CHANGE_EVENT, callback);
  }

  getAllEvents() {
    return this.events;
  };

  getFavorites() {
    return this.events.filter((event) => event.isFavorite);
  };

  getEventById(id) {
    return this.events.find((event) => event.id === id)
  };

  handleActions(action) {
    switch (action.actionType) {
      case actionTypes.ADD_EVENT:
        this.addEvent(action.addedEvent);
        break;
      case actionTypes.REMOVE_EVENT:
        this.removeEvent(action.eventId);
        break;
      case actionTypes.UPDATE_EVENT:
        this.updateEvent(action.updatedEvent);
        break;
      case actionTypes.MARK_FAVORITE_EVENT:
        this.markFavoriteEvent(action.markedEventId);
        break;
      case actionTypes.UNMARK_FAVORITE_EVENT:
        this.unmarkFavoriteEvent(action.unmarkedEventId);
        break;
      default:
        break;
    }
  };

  addEvent(event) {
    this.events.push(event);
    this.emit(this.CHANGE_EVENT);
  };

  removeEvent(id) {
    const index = this.events.findIndex((event) => event.id === id);
    if (index !== -1) {
      this.events.splice(index, 1);
      this.emit(this.CHANGE_EVENT);
    }
  };

  updateEvent(updatedEvent) {
    const index = this.events.findIndex(
      (event) => event.id === updatedEvent.id
    );
    if (index !== -1) {
      this.events[index] = updatedEvent;
      this.emit(this.CHANGE_EVENT);
    }
  };

  markFavoriteEvent(id) {
    const event = this.events.find((event) => event.id === id);
    if (event) {
      event.isFavorite = true;
      this.emit(this.CHANGE_EVENT);
    }
  };

  unmarkFavoriteEvent(id) {
    const event = this.events.find(event => event.id === id);
    if (event) {
      event.isFavorite = false;
      this.emit(this.CHANGE_EVENT);
    }
  };
}


const eventStore = new EventsStore();
dispatcher.register(eventStore.handleActions.bind(eventStore));

export default eventStore;