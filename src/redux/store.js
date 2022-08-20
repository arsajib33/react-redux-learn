

import rootReducer from './rootReducer';
import { createStore,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
import { myLogger } from './middleware/myLogger';
const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,myLogger)))

export default store
