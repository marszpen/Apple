import { createStore, combineReducers } from 'redux';
import initialState from './initialStore';
import shortid from 'shortid';
import { strContains } from '../utils/strContains'

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => {
  return (state.columns)
};
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({type: 'ADD_CARD', payload });
export const addList = payload => ({ type: "ADD_LIST", payload });
export const searchString = payload => ({type: 'UPDATE_SEARCHING', payload});
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({columns}, listId) => columns.filter((column) => column.listId === listId); //przyjmuje w argumencie informację, o jaką listę nam chodzi i zwracać tylko te kolumny, które są skojarzone właśnie z tą listą. Są skojarzone, czyli mają po prostu odpowiednią wartość właściwości listId
export const getAllLists = (state) => state.lists; //getAllLists zwraca wszystkie listy
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload }); 


const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload
    default:
      return statePart;
  }
}

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer, //W pierwszym argumencie przekazujemy referencję do funkcji, która będzie odpowiadała za modyfikację danych z magazynu.
  initialState, // <- informacje o danych startowych magazynu, czyli jakie dane magazyn powinien posiadać na początku
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //np. ustalić, jakie middleware (czyli pluginy) należy wykorzystać.
);


export default store;