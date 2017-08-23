import { CHARACTERS_LOADED } from '../actions/';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CHARACTERS_LOADED:
    {
      const { payload: characters } = action;
      console.log('REDUCER CHARCETER FETCH SUCCES');
      return characters;
    }
    default:
      return state;
  }
};

export default reducer;