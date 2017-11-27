export default function(state = 'CT_FAQ', action) {
  console.log('calling from reduccers', action.payload);
  switch (action.type) {
    case 'SWITCH_CT':
      return action.payload;
    default:
      return state;
  }
  return state;
}
