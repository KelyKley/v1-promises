import createStore from 'redux-zero';

const initialState = {
   todos: [],
   items: []
};

const store = createStore(initialState);
export default store;