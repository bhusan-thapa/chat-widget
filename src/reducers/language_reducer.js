export default function(state = 'LANG_ENG', action) {
  console.log('lang action', state);
  switch (action.type) {
    case 'SWITCH_LANG':
      return action.payload;
  }
  return state;
}
