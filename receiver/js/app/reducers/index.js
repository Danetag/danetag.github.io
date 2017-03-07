import { combineReducers } from 'redux';

import config from './config';
import ui from './ui';
import appData from './app-data';
import navigation from './navigation';
import playlist from './playlist';

const rootReducer = combineReducers({
  ui,
  appData,
  playlist,
  navigation,
  config
});

export default rootReducer;
