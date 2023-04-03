import { createStore, combineReducers } from 'redux';
import initialState from './initialStore';
import listsReducer from './listsRedcer';
import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';
import searchStringReducer from './searchStringReducer';

export const searchString = payload => ({type: 'UPDATE_SEARCHING', payload});

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