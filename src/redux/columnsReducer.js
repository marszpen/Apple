import shortid from 'shortid';

//selectors
export const getAllColumns = (state) => {
  return (state.columns)
};export const getColumnsByList = ({columns}, listId) => columns.filter((column) => column.listId === listId); //przyjmuje w argumencie informację, o jaką listę nam chodzi i zwracać tylko te kolumny, które są skojarzone właśnie z tą listą. Są skojarzone, czyli mają po prostu odpowiednią wartość właściwości listId

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName("ADD_COLUMN");

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }

  export default columnsReducer;