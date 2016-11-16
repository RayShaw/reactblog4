import { combineReducers } from 'redux'
import blogs from './blogs'
import formDisplayed from './formDisplayed'

const rootReducer = combineReducers({
  blogs,
  formDisplayed,
});

export default rootReducer;
