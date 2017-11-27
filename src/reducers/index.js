import { combineReducers } from "redux";
import ToggleReducer from "./toggle_reducer";
import MessageReducer from "./message_reducer";
import Reply from "./reply_reducer";
import Language from "./language_reducer";
import ComponentType from "./ct_reducers";
import FlowID from "./flowid_reducer";

const rootReducer = combineReducers({
	toggle: ToggleReducer,
	message: MessageReducer,
	reply: Reply,
	language: Language,
	component_type: ComponentType,
	flow_id: FlowID
});

export default rootReducer;
