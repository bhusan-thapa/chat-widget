export default function(state = "", action) {
	switch (action.type) {
	case "FLOW_ID":
		return action.payload;
	}
	return state;
}
