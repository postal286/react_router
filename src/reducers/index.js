import {combineReducers} from 'redux'

import tabsReducer from './tabsReduser'
import weatherWidgetReducer from './weatherWidgetReducer'

export default combineReducers({
  tabs: tabsReducer,
  weatherWidget: weatherWidgetReducer
})
