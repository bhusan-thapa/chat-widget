export default function(state = false, action) {
	switch (action.type) {
	case "CLICKED":
		return action.payload;
	}
	return state;
}
