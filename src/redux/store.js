import { createStore } from 'redux';
import initialState from './initialStore';
import shortid from 'shortid';


const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [ ...state.cards, { ...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHING':
      return { ...state, searchingString: action.payload};
      default:
      return state;
  }
};

const searchString = (payload) => ({
  type: 'UPDATE_SEARCHING', payload
  })

const store = createStore(
  reducer, //W pierwszym argumencie przekazujemy referencję do funkcji, która będzie odpowiadała za modyfikację danych z magazynu.
  initialState, // <- informacje o danych startowych magazynu, czyli jakie dane magazyn powinien posiadać na początku
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //np. ustalić, jakie middleware (czyli pluginy) należy wykorzystać.
);


export default store;