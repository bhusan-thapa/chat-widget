export default function(state = ["Welcome"], action) {
	switch (action.type) {
	case "SOCKET_NEW_MSG":
		return [...state, action.payload];
	}
	return state;
}
