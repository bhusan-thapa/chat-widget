export default function(
  state = [
    {
      module_type: 'MT_BEGIN'
    }
  ],
  action
) {
  switch (action.type) {
    case 'MSG_SEND':
      return [...state, action.payload];
    case 'RESET':
      return [{ module_type: 'MT_BEGIN' }];
  }
  return state;
}
