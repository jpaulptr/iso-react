
import { createStore, combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import reducers from '../reducers/reducers';


const store = createStore(
  combineReducers({   
     routing: routerReducer,
     app: reducers
  }),
);

exports.store = store;

