import { createStore , combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
      Reducer,
      initialState  
    );

    return store;
}