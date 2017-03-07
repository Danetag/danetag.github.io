import { combineReducers } from 'redux';

import config from './config';
import ui from './ui';
import appData from './app-data';
import cast from './cast';
import script from './script';

const rootReducer = combineReducers({
  ui,
  appData,
  script,
  cast,
  config
});

export default rootReducer;
