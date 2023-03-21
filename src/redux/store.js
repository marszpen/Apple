import { createStore } from 'redux';
import initialState from './initialStore';
import shortid from 'shortid';
import { strContains } from '../utils/strContains'

//selectors
//export const getFilteredCards = (state, columnId) => state.cards
//  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => {
  return (state.columns)
};
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload });
export const searchString = payload => ({type: 'UPDATE_SEARCHING', payload});
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

  const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [ ...state.cards, { ...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHING':
      return { ...state, searchString: action.payload};
      default:
      return state;
  }
};

const store = createStore(
  reducer, //W pierwszym argumencie przekazujemy referencję do funkcji, która będzie odpowiadała za modyfikację danych z magazynu.
  initialState, // <- informacje o danych startowych magazynu, czyli jakie dane magazyn powinien posiadać na początku
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //np. ustalić, jakie middleware (czyli pluginy) należy wykorzystać.
);


export default store;