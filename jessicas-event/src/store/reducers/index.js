import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import singleEventReducer from "./singleEventReducer";


export default combineReducers({
    events: eventsReducer,
    event: singleEventReducer
})